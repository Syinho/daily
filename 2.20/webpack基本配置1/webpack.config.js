// css的编译，less的编译，自动创建打包好的html文件，css文件的合并，css文件的压缩，css文件的兼容性处理
const {
    join
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
process.env.NODE_ENV = "development";

const config = {
    entry: './js/index.js',
    output: {
        filename: 'js/bundle.js',
        path: join(__dirname, '/dist'),
        publicPath: '../'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', {
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: [require('postcss-preset-env')()]
                }
            }]
        }, {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', {
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: [require('postcss-preset-env')()]
                }
            }, 'less-loader']
        }, {
            test: /\.(jpg|png|gif|jpeg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    esModule: false,
                    name: '[hash:10].[ext]',
                    outputPath: 'imgs'
                }
            }]
        }, {
            test: /\.html$/,
            use: ['html-loader']
        }, {
            exclude: /\.(js|css|html|less|jpg|jpeg|gif|png)$/,
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
            template: './html/index.html',
            filename: 'html/[hash:10].html'
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