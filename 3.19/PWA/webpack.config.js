const {
    join
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
process.env.NODE_ENV = "production";

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/bundle.[contenthash:10].js',
        path: join(__dirname, '/dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            }]
        }, {
            oneOf: [{
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }, 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: () => [require('postcss-preset-env')()]
                    }
                }]
            }, {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8 * 1024,
                        esModule: false,
                        name: '[contenthash:10].[ext]',
                        outputPath: 'images'
                    }
                }]
            }, {
                test: /\.html$/,
                use: ['html-loader']
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[contenthash:10].css'
        }),
        new OptimizeCssAssetsWebpackPlugin(),
        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ],
    mode: 'production',
    devtool: 'eval-source-map'
}