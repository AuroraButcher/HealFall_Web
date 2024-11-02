//跨域解决方案
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
//Element-plus按需引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://example.com',
        changeOrigin: true,
      }
    }
  }
})
