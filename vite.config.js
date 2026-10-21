import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    // Explicit automatic JSX runtime — so you don't need `import React`
    // in every file. The React imports in the components are a safety net
    // in case this plugin fails to load for any reason.
    react({ jsxRuntime: 'automatic' }),
    tailwindcss(),
  ],
})
