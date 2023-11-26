import { Plugin, defineConfig } from 'vite';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        handlebars({
            partialDirectory: resolve(__dirname, 'src/partials'),
        }) as Plugin,
    ],
});
