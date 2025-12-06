import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Asegúrate de que esta línea coincide con tu repositorio
  base: '/design-system/',
})