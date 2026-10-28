/* Banner title with its closing words highlighted (the shaded blue accent used by the other page banners, see banner.css). */
export default function AccentTitle({ text }: { text: string }) {
  const words = text.trim().split(/\s+/)
  const accent = Math.min(4, Math.max(1, Math.ceil(words.length / 3)))
  if (words.length < 2) return <>{words.join(' ')}</>
  return (
    <>
      {words.slice(0, words.length - accent).join(' ')} <em>{words.slice(words.length - accent).join(' ')}</em>
    </>
  )
}
