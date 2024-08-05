import { defineConfig } from 'tsup';
import tsconfigPaths from 'esbuild-plugin-tsconfig-paths';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
  external: ['react', 'react-dom', 'styled-components', 'react-router-dom'],
  esbuildPlugins: [tsconfigPaths()],
});