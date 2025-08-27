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
      '/api': {
        target: 'http://localhost:8000',  //你要跨域访问的网址
        changeOrigin: true,   // 允许跨域
        // headers:{
        //   "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZXhwIjoxNzU2Mjk2MzE5fQ.SpTig-Ntoz7glylBlo1JhHyZ0PQ69QZpUrGa7rkb2L8"
        // },
        rewrite: (path) => path.replace(/^\/api/, '') // 重写路径把路径变成空字符
      }
    }
  }})
