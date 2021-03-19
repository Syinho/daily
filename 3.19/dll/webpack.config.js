const {
    join
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const addAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/bundle.js',
        path: join(__dirname, '/dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DllReferencePlugin({
            // 通过指定webpack的映射库来概述webpack哪些第三方文件不打包
            manifest: join(__dirname, './dll/manifest.json')
        }),
        new addAssetHtmlWebpackPlugin({
            filepath: join(__dirname, './dll/libraries_jquery.js')
        })
    ],
    mode: 'production'
}