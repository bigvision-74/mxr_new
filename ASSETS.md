# Run MXR locally

1. Pull the latest main branch.
2. Extract **MXR-Local-Assets.zip** into the repository root, preserving the src/ and public/ folders.
3. Run `npm install` then `npm run dev`. Open the localhost URL printed by Vite (usually http://localhost:5173).
4. For production, run `npm run build`. The output is in `build/`.

## Separately supplied media

These files stay on your computer and are ignored by Git:

- `public/assets/images/case-studies/hospital.mp4`
- `src/assets/images/drivexr/pod-transparent.webp`
- `src/assets/images/modal3d/VS-50.glb`
- `src/assets/videos/banner/HV9_showcase_cut_v004_A_1920.mp4`
- `src/assets/images/modal3d/banner/ammunition.png`
- `src/assets/images/modal3d/banner/tank.png`
- `src/assets/images/services/immersive-room.png`
- `src/assets/images/solutions/defence-security.png`

The ZIP includes file checksums. The published ChatGPT site already includes these assets.
