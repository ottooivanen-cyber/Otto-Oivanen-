# Otto Oivanen – portfolio

One-page personal site. Next.js (App Router) + TypeScript + Tailwind, exported as static HTML.
No database, no forms, no analytics.

Live: https://ottooivanen-cyber.github.io/Otto-Oivanen-/

## Edit

- **Text:** everything is in `content/site.ts`. Each fact has its source URL in a comment.
- **Photos:** drop files into `public/images/` with these names. A photo shows up only when its file exists:
  - `portrait.jpg` (hero)
  - `startup-window.jpg` (Startup Window project)
  - `vaasa-interview.jpg` (How I think)
  - `lunds-vk.jpg` (Volleyball)

  Add the photographer to `credit` in `content/site.ts` when the photo isn't your own.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out
```

## Deploy

Every push to `main` builds and publishes to GitHub Pages (`.github/workflows/deploy.yml`).
One-time setup: repo **Settings → Pages → Source: GitHub Actions**.
