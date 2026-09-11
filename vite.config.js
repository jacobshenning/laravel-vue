
// Project configuration
import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

// Valet configuration
import fs from 'fs';
import { homedir } from 'os'
import { resolve } from 'path'

export default defineConfig(({ command, mode }) => {
    // Load current .env-file
    const env = loadEnv(mode, process.cwd(), '')

    // Set the host based on APP_URL
    let host = new URL(env.APP_URL).host
    let homeDir = homedir()
    let serverConfig = {}

    // Only the dev server uses the Valet certificate. `vite build` has no
    // server to configure, and a deploy target has no Valet to read from, so
    // loading it unconditionally fails the build with ENOENT.
    const certificate = homeDir
        ? resolve(homeDir, `.config/valet/Certificates/${host}.key`)
        : null

    if (command === 'serve' && certificate && fs.existsSync(certificate)) {
        serverConfig = {
            https: {
                key: fs.readFileSync(certificate),
                cert: fs.readFileSync(
                    resolve(homeDir, `.config/valet/Certificates/${host}.crt`),
                ),
            },
            hmr: {
                host
            },
            host
        }
    }

    return {
        plugins: [
            laravel({
                input: 'resources/js/app.js',
                ssr: 'resources/js/ssr.js',
                refresh: true,
            }),
            vue({
                template: {
                    transformAssetUrls: {
                        base: null,
                        includeAbsolute: false,
                    },
                },
            }),
        ],
        server: serverConfig
    };
})

