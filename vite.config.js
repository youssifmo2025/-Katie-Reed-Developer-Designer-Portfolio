import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    watch: {
      // تجاهل ملفات PDF وغيرها من الملفات الثابتة عند المراقبة
      ignored: ['**/*.pdf', '**/*.docx', '**/*.xlsx']
    }
  }
})
