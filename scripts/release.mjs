// Bumps the patch version in package.json and logs the build in RELEASES.txt.
// Runs automatically before `npm run build` (see "prebuild" in package.json).
// Usage: node scripts/release.mjs [--dry-run]
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { execSync } from 'node:child_process'

const dryRun = process.argv.includes('--dry-run')
const PKG = 'package.json'
const LOG = 'RELEASES.txt'
const HEADER = 'MXR Website — Release Log\n=========================\n\n'

const git = (cmd) => {
  try { return execSync(`git ${cmd}`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim() }
  catch { return '' }
}

// 1. Bump patch version
const pkg = JSON.parse(readFileSync(PKG, 'utf8'))
const [major, minor, patch] = pkg.version.split('.').map(Number)
const version = `${major}.${minor}.${patch + 1}`

// 2. Work out what changed since the last logged build
const log = existsSync(LOG) ? readFileSync(LOG, 'utf8') : HEADER
const lastCommit = log.match(/^Commit: ([0-9a-f]{7,40})/m)?.[1]
const head = git('rev-parse --short HEAD') || 'unknown'
const range = lastCommit && git(`cat-file -t ${lastCommit}`) === 'commit' ? `${lastCommit}..HEAD` : '-10'
const commits = [...new Set(git(`log ${range} --no-merges --pretty=format:%s`).split('\n').map((s) => s.trim()).filter(Boolean))]
const dirty = git('status --porcelain').split('\n').filter(Boolean)
  .filter((l) => !l.endsWith(PKG) && !l.endsWith(LOG))

const changes = commits.map((c) => `  - ${c}`)
if (dirty.length) changes.push(`  - Uncommitted changes in ${dirty.length} file(s)`)
if (!changes.length) changes.push('  - Rebuild, no code changes')

const now = new Date()
const stamp = `${now.toISOString().slice(0, 10)} ${now.toTimeString().slice(0, 5)}`
const entry = `v${version} — ${stamp}\nCommit: ${head}\nChanges:\n${changes.join('\n')}\n\n`

// 3. Write (newest entry at the top, below the header)
const body = log.startsWith(HEADER) ? log.slice(HEADER.length) : log
if (dryRun) {
  console.log(entry)
} else {
  pkg.version = version
  writeFileSync(PKG, JSON.stringify(pkg, null, 2) + '\n')
  writeFileSync(LOG, HEADER + entry + body)
  console.log(`Build version v${version} logged in ${LOG}`)
}
