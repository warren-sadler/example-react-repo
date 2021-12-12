import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import visualizer from 'rollup-plugin-visualizer'

export default {
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.build.json',
            declaration: true,
            declarationDir: 'dist',
        }),
        postcss(),
        terser(),
        visualizer({
            filename: './dist/stats.html',
        }),
    ],
    external: ['react', 'react-dom'],
}
