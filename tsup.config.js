import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.js'],
    format: ['cjs', 'esm'],
    dts: false,
    sourcemap: true,
    clean: true,
    external: ['axios']
});
