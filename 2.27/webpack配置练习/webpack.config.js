// css,less的打包，压缩，兼容
// js文件的打包，压缩，兼容
// css，less中文件引入的图片的打包
// html文件内引入的图片的打包
// 其他文件，比如字体文件的打包

const {
    join
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
process.env.NODE_ENV = 'development';

const config = {
    entry: './src/js/index.js',
    output: {
        path: join(__dirname, '/dist'),
        filename: 'js/bundle.js'
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
            test: /\.(gif|jpg|jpeg|png)$/,
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
            exclude: /\.(js|html|css|less|jpg|jpeg|png|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'media',
                    filename: '[hash:10].[ext]'
                }
            }]
        }, 
        // {
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     use: [{
        //         loader: 'eslint-loader',
        //         options: {
        //             fix: true
        //         }
        //     }]
        // }, 
        {
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
            template: './src/html/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[hash:10].css'
        }),
        new OptimizeCssAssetsWebpackPlugin()
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