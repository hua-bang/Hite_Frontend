const { resolve } = require("path");

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "/@": resolve(__dirname, "./src"),
      "/@components": resolve(__dirname, "./src/components")
    }
  },
  server:{
    proxy:{
      '/api': 'http://localhost:8080/'
    }
  }
})
