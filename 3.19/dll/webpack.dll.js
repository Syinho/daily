const {
    join
} = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        libraries_jquery: ['jquery']
    },
    output: {
        filename: '[name].js',
        path: join(__dirname, '/dll'),
        library: '[name]_[hash:5]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_[hash:5]',
            // 映射库文件的名称
            path: join(__dirname, 'dll/manifest.json')
            // 打包文件和映射库文件的位置
        })
    ],
    mode:'production'
}