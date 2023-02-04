import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [typescript({
    allowSyntheticDefaultImports: true,
    declaration: true,
    declarationDir: 'dist'
  })]
};