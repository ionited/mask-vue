import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import cleaner from 'rollup-plugin-cleaner';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
    input: './src/index.ts',
    output: [{
        file: pkg.module,
        format: 'esm',
        sourcemap: true
    }, {
        file: pkg.main,
        format: 'umd',
        name: 'window',
        sourcemap: true,
        extend: true
    }],
    plugins: [
        resolve(),
        typescript(),
        commonjs(),
        terser(),
        cleaner({ targets: ['./dist'] })
    ]
}
