const {
    resolve
} = require('path');
const webpack = require('webpack');
const vendors = [
    'jquery'
];

module.exports = {
    entry: {
        'libs': vendors
    },
    output: {
        path: resolve('dll'),
        // 打包后的地址
        filename: '[name].js',
        // 打包后的库的名称
        library: '[name]'
        // 打包后的映射的名称
    },
    plugins: [
        new webpack.DllPlugin({
            // 这个插件用来告诉webpack的映射关系
            name: '[name]',
            // 映射的名字
            path: resolve('dll/manifest.json')
            // 映射的文件
        })
    ],
    mode: 'production'
}