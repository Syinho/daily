const {
    join
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
        plugins: () => [require('postcss-preset-env')()]
    }
}];

const config = {
    entry: './src/js/index.js',
    output: {
        path: join(__dirname, '/dist'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [{
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
            oneOf: [{
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
                }, {
                    test: /\.css$/,
                    use: [...commonCssLoader]
                },
                {
                    test: /\.less$/,
                    use: [...commonCssLoader, 'less-loader']
                },
                {
                    test: /\.(jpg|jpeg|png|gif)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            name: '[hash:10].[ext]',
                            outputPath: 'images',
                            limit: 8 * 1024,
                            esModule: false
                        }
                    }]
                },
                {
                    test: /\.html$/,
                    use: [{
                        loader: 'html-loader'
                    }]
                },
                {
                    exclude: /\.(jpg|jpeg|png|gif|html|css|less|js)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            filename: '[hahs:10].[ext]',
                            outputPath: 'media'
                        }
                    }]
                }
            ]
        }]
    },
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[contenthash:10].css'
        }),
        new OptimizeCssAssetsWebpackPlugin()
    ],
    devServer: {
        contentBase: join(__dirname, '/dist'),
        compress: true,
        port: 3000,
        open: true
    }
};
module.exports = config;