import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@inertiajs/react': fileURLToPath(new URL('./resources/js/lib/inertia.jsx', import.meta.url)),
        },
    },
    build: {
        outDir: 'dist',
        manifest: false,
    },
});
