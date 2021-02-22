const {
    join
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const {
    Z_NEED_DICT
} = require('zlib');
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
                    name: 'img/[hash:10].[ext]'
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
                    name: 'source/[hash:10].[ext]'
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './html/index.html'
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