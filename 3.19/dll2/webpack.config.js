const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const addAssetsHtmlWebpackPLugin = require('add-asset-html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/bundle.js',
    path: resolve('dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.DllReferencePlugin({
      manifest: resolve('dist/dll/jquery.manifest.json'),
    }),
    new addAssetsHtmlWebpackPLugin({
      filepath: resolve('dist/dll/jquery.dll.js'),
    }),
  ],
  mode: 'production',
}
