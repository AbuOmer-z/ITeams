import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ITeams/', // ✅ VERY IMPORTANT for GitHub Pages
})
