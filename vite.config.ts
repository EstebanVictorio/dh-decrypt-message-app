import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const root = path.resolve(__dirname, './src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      blocks: `${root}/blocks`,
      pages: `${root}/pages`,
      components: `${root}/components`,
      layouts: `${root}/layouts`,
      schemas: `${root}/schemas`,
      mutations: `${root}/mutations`,
      utils: `${root}/utils`,
    },
  },
})
