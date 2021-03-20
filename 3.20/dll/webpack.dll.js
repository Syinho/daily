const {
    resolve
} = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        jquery: ['jquery']
    },
    output: {
        filename: '[name].js',
        path: resolve('dist/dll'),
        library: '[name]_dll_[hash:5]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_dll_[hash:5]',
            path: resolve('dist/dll/[name].manifest.json')
        })
    ],
    mode: 'production'
}