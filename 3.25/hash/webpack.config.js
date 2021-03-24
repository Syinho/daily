const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './src/js/index.js',
        change: './src/js/change.js'
    },
    output: {
        filename: 'js/bundle.[chunkhash].js',
        path: resolve('dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../'
                }
            }, 'css-loader']
        }, {
            test: /\.(img|png|gif|jpeg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    esModule: false,
                    outputPath: 'images',
                    name: 'img_[hash].[ext]'
                }
            }]
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/css_[chunkhash].css'
        })
    ],
    mode: 'development'
};