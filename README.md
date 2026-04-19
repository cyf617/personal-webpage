# Yifan Chen · Personal Website

> 🌐 **Live site**: https://personal-webpage.yifanchen0726.workers.dev
> Bilingual (EN / 中文) academic portfolio for Yifan Chen (陈奕帆) — MSc Transport with Data Science @ Imperial College London.

A single-page, dark-tech-themed personal website featuring research projects, education, experience, skills and contact info. Built to showcase work in **Safe & Trustworthy AI, Autonomous Driving, and Machine Learning for Transportation Systems**.

## ✨ Features

- 🌓 **Dark tech aesthetic** — gradient accents, glowing orbs, subtle grid background, terminal-style hero card
- 🌐 **One-click EN / 中文 toggle** — persisted in `localStorage`, respects browser language on first visit
- 📜 **Smooth reveal animations** on scroll
- 📱 **Fully responsive** — works on desktop, tablet, phone
- 📄 **Bilingual CV download** (EN & ZH PDFs)
- ⚡ **Blazing fast** — Astro ships near-zero JS, static HTML + CSS
- 🚀 **Auto-deployed** on every `git push` via Cloudflare Pages

## 🛠️ Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Astro](https://astro.build) 6 |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 |
| Fonts | Inter · JetBrains Mono · Noto Sans SC |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com) |
| Source control | GitHub |

## 🗂️ Project Structure

```
personal-website/
├── public/
│   ├── cv/                        # CV PDFs (EN + ZH) served as /cv/*.pdf
│   └── favicon.svg                # Site icon
├── src/
│   ├── data/
│   │   └── content.ts             # 👈 ALL website copy lives here (bilingual)
│   ├── layouts/
│   │   └── Layout.astro           # Base HTML + language-toggle script
│   ├── pages/
│   │   └── index.astro            # Single-page layout (Hero → About → … → Contact)
│   └── styles/
│       └── global.css             # Design tokens + custom utilities
├── astro.config.mjs
├── package.json
└── README.md
```

## 🧞 Commands

All commands are run from the project root:

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build for production into `./dist/` |
| `npm run preview` | Preview the production build locally |

## ✏️ Editing Content

All site text is centralised in **`src/data/content.ts`**. Every section has paired `en` / `zh` blocks with inline Chinese comments explaining what to edit. Save the file → dev server hot-reloads → you see changes instantly.

To ship changes to the live site:

```bash
git add .
git commit -m "update: <what you changed>"
git push
```

Cloudflare Pages auto-builds and deploys within ~1 minute.

## 📬 Contact

- **Email** — yifanchen0726@gmail.com
- **GitHub** — [@cyf617](https://github.com/cyf617)

---

© 2026 Yifan Chen · Built with Astro & Tailwind
