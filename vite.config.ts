import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // Force single React instance
    dedupe: ['react', 'react-dom', '@tanstack/react-query']
  },
  // Ensure React is treated as external in SSR context
  optimizeDeps: {
    include: ['react', 'react-dom', '@tanstack/react-query'],
    esbuildOptions: {
      target: 'esnext'
    }
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // React core libraries
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // React Query
          'query-vendor': ['@tanstack/react-query'],
          // Radix UI components (grouped by usage)
          'radix-ui': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-avatar',
            '@radix-ui/react-label',
            '@radix-ui/react-slot',
          ],
          // Other UI libraries
          'ui-vendor': [
            'lucide-react',
            'class-variance-authority',
            'clsx',
            'tailwind-merge',
          ],
          // Form libraries
          'form-vendor': [
            'react-hook-form',
            '@hookform/resolvers',
            'zod',
          ],
        }
      }
    },
    chunkSizeWarningLimit: 600,
  }
}));