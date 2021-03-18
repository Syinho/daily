const {
    join
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

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
            enforce: 'pre',
            use: [{
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            }]
        }, {
            oneOf: [{
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
        })
    ],
    mode: 'development',
    devtool: 'eval-source-map'
};