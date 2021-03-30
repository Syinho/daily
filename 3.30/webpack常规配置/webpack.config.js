const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtarctPlugin = require('mini-css-extract-plugin');
const OptimzeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

const commonCssLoader = [{
    loader: MiniCssExtarctPlugin.loader,
    options: {
        publicPath: '../'
    }
}, 'css-loader', {
    loader: 'postcss-loader',
    options: {
        ident: 'postcss',
        plugins: () => [require('postcss-preset-env')()]
    }
}];

process.env.NODE_ENV = 'production';

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/bundle.[contenthash:5].js',
        path: resolve('dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            enforce: 'pre',
            use: [{
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            }]
        }, {
            oneOf: [{
                test: /\.css$/,
                use: [...commonCssLoader]
            }, {
                test: /\.less$/,
                use: [...commonCssLoader, 'less-loader']
            }, {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8 * 1024,
                        esModule: false,
                        name: 'img_[contenthash:5].[ext]',
                        outputPath: 'images'
                    }
                }]
            }, {
                test: /\.html$/,
                loader: ['html-loader']
            }, {
                exclude: /\.(js|html|css|less|jpg|png|gif|jpeg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'media_[contenthash:5].[ext]',
                        outputPath: 'media'
                    }
                }]
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                useBuiltIns: 'usage',
                                corejs: {
                                    version: 3
                                },
                                targets: {
                                    chrome: '60',
                                    firefox: '60',
                                    ie: '9',
                                    safari: '10',
                                    edge: '17'
                                }
                            }]
                        ],
                        cacheDirectory: true
                    }
                }]
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
        new MiniCssExtarctPlugin({
            filename: 'css/[contenthash:5].css'
        }),
        new OptimizeCssAssetsPlugin(),
        new webpack.DllReferencePlugin({
            manifest: resolve('dll/mainfest.json')
        }),
        new AddAssetHtmlWebpackPlugin({
            filepath: resolve('dll/libs.js')
        })
    ],
    mode: 'production',
    performance: {
        hints: 'warning',
        maxAssetSize: 300000,
        maxEntrypointSize: 500000,
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith('css') || assetFilename.endsWith('.js');
        }
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: resolve('dist'),
        compress: true,
        port: 3000,
        open: true
    }
};