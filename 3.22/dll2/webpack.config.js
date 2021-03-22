const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const addAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/bundle.[contenthash:5].js',
        path: resolve('dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
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
            filepath: resolve('dll/libs.js')
        })
    ],
    mode: 'production'
};