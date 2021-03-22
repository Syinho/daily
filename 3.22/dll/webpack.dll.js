const {
    resolve
} = require('path');
const webpack = require('webpack');
const vendors = [
    'jquery'
];

module.exports = {
    entry: {
        'lib': vendors
        // 最终打包后生成的name
    },
    output: {
        path: resolve('dll'),
        filename: '[name].js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: resolve('dll/manifest.json')
        })
    ],
    mode: 'production'
};