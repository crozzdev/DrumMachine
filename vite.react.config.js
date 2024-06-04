import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    root: 'reactApp',
    plugins: [react()],
    build: {
        outDir: '../dist/reactApp'
    },
    server: {
        open: true,
    },
})
