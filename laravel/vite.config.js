import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import laravel from 'laravel-vite-plugin';
import path from "path";

export default defineConfig({
    plugins: [
        vue(),
        VueRouter({
            dts: './resources/js/router/typed-router.d.ts',
            routesFolder: 'resources/js/pages',
        }),
        laravel({
            input: ['resources/js/app.ts', 'resources/css/app.css'],
            refresh: true,
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./resources/js"),
        },
    },
    server: {
        host: true,
        port: 5173,
        strictPort: true,
        hmr: { host: "localhost" },
        // ↓ これを追加！ WindowsとUbuntuの間の変更を検知しやすくします
        watch: {
            usePolling: true,
        },
    },
})
