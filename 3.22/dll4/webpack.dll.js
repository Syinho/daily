const webpack = require('webpack');
const {
    resolve
} = require('path');
const vendors = ['jquery'];

module.exports = {
    entry: {
        libs: vendors
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
    mode:'production'
}