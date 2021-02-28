const {
    join
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OPtimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// 定义nodejs环境变量，决定使用browserslist的哪个环境
process.env.NODE_ENV = 'production';
// 复用loader
const commonCssLoader = [{
    loader: MiniCssExtractPlugin.loader,
    options: {
        publicPath: '../'
    }
}, 'css-loader', {
    loader: 'postcss-loader',
    options: {
        ident: 'postcss',
        plugins: () => [require('postcss-preset-env')()]
    }
}]

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: join(__dirname, '/dist'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [...commonCssLoader]
            }, {
                test: /\.less$/,
                use: [...commonCssLoader, 'less-loader']
            }, {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8 * 1024,
                        esModule: false,
                        filename: '[hash:10].[ext]',
                        outputPath: 'images'
                    }
                }]
            }, {
                test: /\.html$/,
                use: ['html-loader']
            }, {
                exclude: /\.(jpg|jpeg|png|gif|html|css|less|js)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        filename: '[hash:10].[ext]',
                        outputPath: 'media'
                    }
                }]
            },
            // 正常来讲， 一个文件只能被一个loader处理，
            // 当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序
            // 先执行eslint-loader，再执行babel-loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: [{
                    loader: 'eslint-loader',
                    options: {
                        fix: true
                    }
                }]
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                useBuiltIns: 'usage',
                                corejs: {
                                    version: 3
                                },
                                targets: {
                                    chrome: '60',
                                    firefox: '50',
                                    ie: '9',
                                    safari: '10',
                                    edge: '17'
                                }
                            }]
                        ]
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[hash:10].css'
        }),
        new OPtimizeCssAssetsWebpackPlugin()
    ],
    mode: 'production',
    devServer: {
        contentBase: join(__dirname, '/dist'),
        compress: true,
        port: 3000,
        open: true
    }
};