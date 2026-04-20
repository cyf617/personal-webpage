// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// DEPLOY_TARGET=github 时走 GitHub Pages 项目站路径,其它情况(包括本地 dev 和 Cloudflare Pages)使用根路径
const isGithubPages = process.env.DEPLOY_TARGET === 'github';

// https://astro.build/config
export default defineConfig({
  site: isGithubPages
    ? 'https://cyf617.github.io'
    : 'https://personal-webpage.yifanchen0726.workers.dev',

  base: isGithubPages ? '/personal-webpage' : '/',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});