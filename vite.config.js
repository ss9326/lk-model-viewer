import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/lk-model-viewer/",
  build: {  
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});