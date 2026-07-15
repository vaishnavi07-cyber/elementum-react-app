# Elementum — Figma to React

A pixel-close React implementation of the "Elementum" Figma design (Navbar, Hero,
About/Progress rows, Offer list, Testimonials, Newsletter + Footer), built with
Vite + plain CSS (no UI framework) and fully responsive from mobile to desktop.

## Stack

- React 19 + Vite
- Plain CSS with design tokens (`src/index.css`) — no Tailwind/CSS-in-JS, so it's
  easy to read and hand off
- No extra runtime dependencies

## Project structure

```
src/
  index.css                 design tokens, reset, shared highlight/underline utilities
  App.jsx                   composes the page from sections
  components/
    ui/                      small reusable primitives
      Underline.jsx          hand-drawn squiggle under a word
      ReadMore.jsx           "Read more →" link with hover animation
      CirclePhoto.jsx        circular avatar/photo with optional name badge
    Navbar/                  logo, nav links, active state, mobile hamburger menu
    Hero/                    headline with 3 highlight styles + scattered photo row
    About/                   two alternating text+photo rows with connecting line
    Offer/                   "What we can offer you" divider list
    Testimonials/            quote card with scattered customer photo clusters
    Newsletter/               newsletter CTA + 4-column footer
```

Each section is a self-contained component with its own `.css` file (co-located),
so styles never leak between sections and each piece is easy to reuse or restyle
independently.

## Responsiveness

Breakpoints are handled per component (roughly 980px / 860px / 760px / 560px) using
CSS Grid/Flexbox reflow rather than a single global breakpoint file, since each
section's content reflows differently (e.g. the testimonial photo clusters hide on
small screens while the quote card remains centered; the About rows stack instead of
sitting side-by-side).

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Deploy to Vercel

**Option A — via GitHub (recommended)**

1. Push this project to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Elementum React build"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to vercel.com and sign in (GitHub login is easiest).
3. Click **Add New → Project**, then select the repo you just pushed.
4. Vercel auto-detects **Vite** as the framework. Confirm these build settings
   (should be pre-filled):
   - **Build Command:** `npm run build` (or `vite build`)
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**. Vercel installs deps, runs the build, and gives you a live
   `https://<project-name>.vercel.app` URL in ~30-60 seconds.
6. Every future `git push` to `main` auto-deploys a new version (with preview URLs
   for other branches/PRs).

**Option B — via Vercel CLI (no GitHub needed)**

```bash
npm install -g vercel
vercel login
vercel        # first run: answer prompts, links/creates the project
vercel --prod # promotes the deployment to your production URL
```

Both options produce the same result — a public, shareable vercel.app link you
can submit.

## Notes on assets

Photos use `randomuser.me` (people) and `picsum.photos` (generic team/meeting
imagery) as stand-ins for the real photography in the Figma file — swap the `src`
values in `Hero.jsx`, `About.jsx`, and `Testimonials.jsx` for your own assets if
you have the originals exported from Figma.
