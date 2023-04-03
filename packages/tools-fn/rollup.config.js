/* eslint-disable @typescript-eslint/no-var-requires */
const json = require('@rollup/plugin-json')
const typescript = require('rollup-plugin-typescript2')
const { terser } = require('rollup-plugin-terser')
const cleanup = require('rollup-plugin-cleanup')
const {
  cleandir
} = require('rollup-plugin-cleandir')
const {
  nodeResolve
} = require('@rollup/plugin-node-resolve')
const replace =require('@rollup/plugin-replace')
const extensions = ['.js', '.ts']

module.exports =  {
  input: './src/index.ts',
  output: [
    // {
    //   dir: './dist',
    //   format: 'umd'
    // },
    {
      dir: './dist',
      format:"umd",
      name:"main"
      // banner: '#!/usr/bin/env node',
    }
  ],
  // banner: '#!/usr/bin/env node',
  plugins: [

    cleandir(['./dist', './bin']),
    typescript({
      tsconfig:'./tsconfig.json'
    }),
    // replace({
    //   delimiters: ['', ''],
    //   '#!/usr/bin/env node': ''
    // }),
    nodeResolve({
      extensions,
      modulesOnly: true,
      preferredBuiltins: false
    }),
    json(),
    // dts.default({
    //   compilerOptions: {
    //     baseUrl: './bin',
    //     paths: {
    //       '@/*': ['./bin'],
    //     },
    // }}),//合并d.ts
    terser(),//代码压缩
    // cleanup(),//删除无效代码
  ],
}
