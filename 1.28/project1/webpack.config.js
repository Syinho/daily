const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist'),
        publicPath: './'
    },
    module: {
        rules: [{
            test: /\.css$/,
            rules: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }, {
            test: /\.less$/,
            rules: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'less-loader'
            }]
        }, {
            test: /\.(jpg|png|jpeg|gif)$/,
            rules: [{
                loader: 'url-loader',
                options: {
                    limit: 7 * 1024,
                    esModule: false,
                    name: './img/[hash:10]_[ext]'
                }
            }]
        }, {
            test: /\.html$/,
            rules: [{
                loader: 'html-loader'
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        compress: true,
        inline: true,
        // hot: true,
        // host: 'localhost',
        port: 3000,
        open: true
    }
}
module.exports = config;