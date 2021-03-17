const {
    join
} = require('path');
const HtmlWebapckPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

process.env.NODE_ENV = "production";

const config = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/[contenthash:10].js',
        path: join(__dirname, '/dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            enforce: 'pre',
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
                test: /\.html$/,
                use: ['html-loader']
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
        new HtmlWebapckPlugin({
            template: './src/html/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[contenthash:10].css'
        }),
        new OptimizeCssAssetsWebpackPlugin()
    ],
    mode: 'production',
    devtool: 'eval-source-map'
};
module.exports = config;