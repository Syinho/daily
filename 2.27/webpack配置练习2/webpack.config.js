const {
    join
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OPtimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

process.env.NODE_ENV = 'development';

const config = {
    entry: './js/index.js',
    output: {
        filename: 'js/bundle.js',
        path: join(__dirname, '/dist')
    },
    module: {
        rules: [{
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
                    plugins: [require('postcss-preset-env')()]
                }
            }]
        }, {
            test: /\.less$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../'
                }
            }, 'css-loader', {
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: [require('postcss-preset-env')()]
                }
            }, 'less-loader']
        }, {
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
            exclude: /\.(html|js|css|less|jpg|jpeg|png|gif)$/,
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
                                firefox: '60',
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
            filename: 'css/[hash:10].css'
        }),
        new OPtimizeCssAssetsWebpackPlugin()
    ],
    mode: 'development',
    devServer: {
        contentBase: join(__dirname, '/dist'),
        compress: true,
        port: 3000,
        open: true
    }
};
module.exports = config;