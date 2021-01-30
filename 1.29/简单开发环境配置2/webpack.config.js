const {
    join
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './js/main.js',
    output: {
        filename: 'js/bundle.js',
        path: join(__dirname, '/dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.(jpg|png|gif|jpeg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: '[hash:10].[ext]',
                    limit: 8 * 1024,
                    outputPath: 'imgs'
                }
            }]
        }, {
            test: /\.html$/,
            use: ['html-loader']
        }, {
            exclude: /\.(js|html|css|less|jpg|png|gif|jpeg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'media'
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './html/index.html'
        })
    ],
    mode: 'development',
    devServer: {
        contentBase: join(__dirname, '/dist'),
        compress: true,
        port: 3000,
        open: true
    }
}
module.exports = config;