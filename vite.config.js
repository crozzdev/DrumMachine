import { defineConfig } from 'vite'

export default defineConfig({
    root: 'vanillaApp',
    build: {
        outDir: '../dist/vanillaApp'
    },
    server: {
        open: true,
    },
})
