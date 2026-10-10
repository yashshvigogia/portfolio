# Yashshvi — Portfolio

Personal portfolio built with React + Vite.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Edit content

All text lives in `src/data.js` (summary, experience, projects, skills, awards, contact links).
Your resume PDF is at `public/resume.pdf` — replace it with a newer one any time, keeping the same name.

## Deploy free on GitHub Pages

1. Create a new public repository on GitHub, e.g. `portfolio`.
2. Push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Open the **Actions** tab and wait for "Deploy to GitHub Pages" to finish (about 1 minute).
   If it ran before you changed the setting, click it and choose **Re-run jobs**.
5. Your site is live at `https://<your-username>.github.io/portfolio/`

Every later `git push` to `main` redeploys automatically.

**Tip:** name the repo `<your-username>.github.io` and the site will be at `https://<your-username>.github.io/` (no `/portfolio` at the end).

## Other free hosts

- **Vercel** or **Netlify**: sign in with GitHub, import the repo, accept the detected Vite settings
  (build command `npm run build`, output folder `dist`). You get a link like `yashshvi.vercel.app`.
