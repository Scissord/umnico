import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

export default defineConfig({
  plugins: [
    reactRefresh(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables";`
      },
    },
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, 'src/components/lib'),
      "@pages": path.resolve(__dirname, 'src/pages/lib'),
      "@hooks": path.resolve(__dirname, 'src/hooks/lib'),
      "@constants": path.resolve(__dirname, 'src/constants/lib'),
      "@ui": path.resolve(__dirname, 'src/ui/lib'),
      "@animations": path.resolve(__dirname, 'src/animations/lib')
    },
  }
});
