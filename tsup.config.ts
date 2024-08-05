import { defineConfig } from 'tsup';
import alias from 'esbuild-plugin-alias';
import path from 'path';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
  external: ['react', 'react-dom', 'styled-components', 'react-router-dom'],
  esbuildPlugins: [
    alias({
      '@components': path.resolve(__dirname, 'src/components'),
      '@theme': path.resolve(__dirname, 'src/theme'),
    }),
  ],
});