import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  base: './',
  server: {
    host: 'localhost',
    port: 5173,  //没被占用，可以使用的端口
    proxy: {
      '/token': {
        target: 'http://localhost:8000/token',  //你要跨域访问的网址
        changeOrigin: true,   // 允许跨域
        rewrite: (path) => path.replace(/^\/token/, '') // 重写路径把路径变成空字符
      },
      '/validate_token': {
        target: 'http://localhost:8000/validate_token',  //你要跨域访问的网址
        changeOrigin: true,   // 允许跨域
        rewrite: (path) => path.replace(/^\/validate_token/, '') // 重写路径把路径变成空字符
      }
    }
  }})
