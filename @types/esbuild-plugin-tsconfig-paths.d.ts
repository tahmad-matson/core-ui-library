declare module 'esbuild-plugin-tsconfig-paths' {
    import { Plugin } from 'esbuild';
  
    function tsconfigPaths(): Plugin;
  
    export default tsconfigPaths;
  }