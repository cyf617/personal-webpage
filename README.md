# Yifan Chen's Personal Website | 陈奕帆的个人网站 🦁

This repository contains the source code for my personal portfolio website, presenting my research, education, internships, projects, and contact details.

👉 **Live Site:** [cyf617.top](https://cyf617.top)  
👉 **Backup Site (GitHub Pages):** [cyf617.github.io/personal-webpage/](https://cyf617.github.io/personal-webpage/)

---

## ✨ Features

- 🌐 **Bilingual (English / 中文)**: Built-in local translation switch for all pages.
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile screens.
- 🎨 **Modern Aesthetics**: Built with a clean, high-performance layout using Astro & Tailwind CSS v4.
- 🔄 **Multi-target Deployment**: Configured to dynamically adapt base paths between Cloudflare Pages (root `/`) and GitHub Pages (subpath `/personal-webpage/`).

---

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Hosting & DNS:** [Cloudflare Pages](https://pages.cloudflare.com/) (Production) & [GitHub Pages](https://pages.github.com/) (CI/CD Fallback)

---

## 💻 Local Development

To run the project locally, make sure you have [Node.js](https://nodejs.org/) installed (Node >= 22 is recommended).

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.

3. **Build the static site:**
   ```bash
   npm run build
   ```
   The compiled static assets will be output to the `./dist` folder.

---

## 🚢 Deployment

### Production (Cloudflare Pages)
To deploy the latest build to Cloudflare Pages manually:
```bash
npm run deploy
```

### GitHub Pages (Auto-deployment)
Every push to the `main` branch automatically triggers the GitHub Actions workflow, which builds and publishes the website to GitHub Pages.

---

© 2026 Yifan Chen (Evan)
