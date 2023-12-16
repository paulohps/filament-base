import {defineConfig, loadEnv} from 'vite';
import laravel from 'laravel-vite-plugin';

const env = loadEnv(
    'all',
    process.cwd()
);

export default defineConfig({
    server: {
        hmr: {
            host: 'localhost',
            clientPort: parseInt(env.VITE_PORT),
        }
    },
    plugins: [
        laravel({
            input: [
                'resources/assets/css/filament/admin/index.css',
                'resources/assets/css/site/index.css',
                'resources/assets/js/filament/admin/index.js',
                'resources/assets/js/site/index.js'
            ],
            refresh: true,
        }),
    ],
});
