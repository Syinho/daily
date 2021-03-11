const {
    join
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        main: './js/index.js',
        test: './js/test.js'
    },
    output: {
        filename: 'js/[name].[contenthash:10].js',
        path: join(__dirname, '/dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
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

// 在配置optimization.splitChunks时，可以有单入口或多入口两种方法
// 多入口方法与1_多入口打包一致。但是会检查每个文件的引入文件，如果有node_modules或者相同引入的module的话(写了一个39.4kb的文件，它被单独打包)，那就单独打包。
// 单入口方法会将文件打包成一个文件，但每个文件的相同引入(达到一定大小的情况下)会被单独打包