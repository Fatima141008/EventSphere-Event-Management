import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration file.
// "plugins: [react()]" tells Vite to understand JSX syntax used in our .jsx files.
export default defineConfig({
  plugins: [react()],
})
