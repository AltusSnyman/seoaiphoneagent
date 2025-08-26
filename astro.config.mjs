// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://aiphoneagent.ai',
  build: {
    format: 'directory',
    // Force inline all stylesheets under 10KB (most critical CSS)
    inlineStylesheets: 'always'
  },
  vite: {
    build: {
      // Aggressive CSS optimization
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          // Force single CSS bundle
          manualChunks: undefined,
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith('.css')) {
              return 'assets/styles.css';
            }
            return 'assets/[name].[ext]';
          }
        }
      }
    }
  },
  server: {
    host: true
  }
});
