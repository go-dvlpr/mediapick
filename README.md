# MediaPeak Landing

One-page static landing page for MediaPeak, built with Vite, React, and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

## Build for hosting

```bash
npm run build
```

Upload the generated `dist` folder to Vercel or another static hosting provider.

Recommended build settings:

- Build command: `npm run build`
- Publish directory: `dist`

## Contact CTA

The page does not use a backend form. Contact calls to action are simple
`mailto:` links for `david@mediapick.io`, so the site can be deployed to Vercel
as a static app without serverless setup.

## Content updates

Most marketing copy, services, industries, process steps, metrics, and footer
links are stored in `src/content.ts`.
