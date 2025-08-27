import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimizaciones específicas para Vercel
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2
      },
      mangle: {
        toplevel: true
      }
    },
    rollupOptions: {
      output: {
        // Dividir chunks para mejor caching en Vercel
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['react-icons'],
          forms: ['react-hook-form', 'zod'],
        },
        // Optimizar nombres de archivos para Vercel
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
      // Habilitar tree shaking agresivo
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false
      }
    },
    // Optimizaciones de CSS para Vercel
    cssCodeSplit: true,
    cssMinify: true,
    // Optimizaciones de assets para Vercel
    assetsInlineLimit: 4096,
    // Deshabilitar source maps en producción
    sourcemap: false,
    // Optimizaciones de chunk para Vercel
    chunkSizeWarningLimit: 1000
  },
  // Optimizaciones de desarrollo
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  // Optimizaciones de preload para Vercel
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@vercel/speed-insights']
  },
  // Configuración específica para Vercel
  define: {
    'process.env.NODE_ENV': '"production"'
  }
})
