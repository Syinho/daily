const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

process.env.NODE_ENV = 'development';

const commonCssLoader = [{
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
}];

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/bundle.[chunkhash:10].js',
        path: resolve('dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [...commonCssLoader]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.[chunkhash:10].css'
        }),
        new OptimizeCssAssetsWebpackPlugin()
    ],
    mode: 'development'
}