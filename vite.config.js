import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This 'base' property is the crucial line.
  // It tells Vite the correct path for your deployed site.
  base: "/my-portfolio/", 
  plugins: [react()],
})