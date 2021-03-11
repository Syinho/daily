const {
    join
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        main: './js/test1.js',
        test: './js/test.js',
    },
    output: {
        filename: 'js/[name].[contenthash:10].js',
        path: join(__dirname, '/dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './html/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    mode: 'production'
};

module.exports = config;