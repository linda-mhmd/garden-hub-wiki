import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' keeps asset URLs relative, so the site works both at a GitHub Pages
// project path (…github.io/garden-hub-wiki/) and at a custom-domain root.
// Runtime image paths are relative too; routing is hash-based.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
