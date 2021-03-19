const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    jquery: ['jquery'],
  },
  output: {
    filename: '[name].dll.js',
    path: resolve('dist/dll'),
    library: '[name].dll.[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name].dll.[hash]',
      path: resolve('dist/dll/[name].manifest.json'),
    }),
  ],
  mode:'production'
}
