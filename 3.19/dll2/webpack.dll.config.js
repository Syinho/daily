const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    // 第三方库
    jquery: ['jquery'],
  },
  output: {
    // 输出的动态链接文件名称，[name]代表当前动态链接库的名称
    filename: '[name].dll.js',
    path: resolve('dist/dll'),
    library: '[name]_dll_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_dll_[hash]',
      path: resolve('dist/dll/[name].manifest.json'),
    }),
  ],
  mode: 'production',
}
