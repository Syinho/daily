const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

process.env.NODE_ENV = "development";
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/bundle.[chunkhash:5].js',
        path: resolve('dist')
    },
    module:{
        rules:[

        ]
    }
}