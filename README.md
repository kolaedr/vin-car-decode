# VIN Car Decode (React + Vite + Tailwind + Radix UI)

Simple VIN decoder using NHTSA API.

## Scripts

- `npm run dev` – start dev server
- `npm run build` – production build (Vite, base `/vin-car-decode/`)
- `npm run preview` – preview production build
- `npm run deploy` – deploy `dist/` to GitHub Pages (via `gh-pages`)

## Deployment (GitHub Pages)

1. Ensure repository name is `vin-car-decode` or adjust `base` in `vite.config.js`.
2. Run:

```bash
npm run build
npm run deploy
```

Site will be available at `https://<your-username>.github.io/vin-car-decode/`.

## Notes

- Uses `react-router-dom` with paths `/vin-car-decode/` and `/vin-car-decode/search`.
- Query param `?vin=...` is preserved in URL when searching.
