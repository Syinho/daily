const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// const webpack = require('webpack');
// const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

process.env.NODE_ENV = 'production';

const commonCssLoader = [{
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
}];

module.exports = {
    entry: './js/index.js',
    output: {
        filename: 'js/bundle.[contenthash:5].js',
        path: resolve('dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [...commonCssLoader]
        }, 
        {
            test: /\.less$/,
            use: [...commonCssLoader, 'less-loader']
        }, 
        {
            test: /\.(jpg|jpeg|png|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    esModule: false,
                    filename: '[hash:10].[ext]',
                    outputPath: 'imgs'
                }
            }]
        }, {
            test: /\.html$/,
            use: ['html-loader']
        }, {
            exclude: /\.(jpg|jpeg|png|gif|html|js|css|less)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    filename: '[hash:10].[ext]',
                    outputPath: 'media'
                }
            }]
        }, {
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
                                firefox: '50',
                                ie: '9',
                                safari: '10',
                                edge: '17'
                            }
                        }]
                    ]
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './html/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/css_[contenthash:5].css'
        }),
        new OptimizeCssAssetsWebpackPlugin(),
        // new webpack.DllReferencePlugin({
        //     manifest: resolve('dll/manifest.json')
        // }),
        // new AddAssetHtmlWebpackPlugin({
        //     filepath: resolve('dll/libs.js')
        // })
    ],
    mode: 'production',
    // devtool: 'hidden-source-map',
    devServer: {
        contentBase: resolve('dist'),
        compress: true,
        port: 3000,
        open: true
    }
}