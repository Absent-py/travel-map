import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@helpers': fileURLToPath(new URL('./src/helpers', import.meta.url)),
            '@plugins': fileURLToPath(new URL('./src/plugins', import.meta.url)),
            '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
        }
    },
    server: {
        proxy: {
          '/api/': {
            target: 'http://localhost:port/',
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace(/^\/api/, ''),
          },
        },
      },
});