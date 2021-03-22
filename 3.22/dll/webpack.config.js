const {
    resolve
} = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const webpack = require('webpack');
const addAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: resolve('dist'),
        filename: 'js/bundle.[contenthash:5].js'
    },
    plugins: [
        new HtmlWebpackplugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new webpack.DllReferencePlugin({
            manifest: resolve('dll/manifest.json')
        }),
        new addAssetHtmlWebpackPlugin({
            filepath: resolve('dll/lib.js')
        })
    ],
    mode: 'production'
}