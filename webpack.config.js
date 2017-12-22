const webpack = require('webpack');
const path = require('path');
const env = process.env.WEBPACK_ENV;

const PATHS = {
	source: path.join(__dirname, 'src/'),
    build: path.join(__dirname, 'dist/')
}

// Main Settings config
module.exports = {
    entry: {
        main: PATHS.source + 'index.js',
		// ajaxform: PATHS.source + 'js/ajaxform.js',
        // tickets: PATHS.source + 'js/tickets.js'
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        }, {
            test: /\.less$/,
            use: [
                'file-loader?name=[name].css',
                'extract-loader',
                {
                    loader: "css-loader",
                    options: {
                        minimize: env === 'production' ? true : false
                    }
                },
                'postcss-loader',
                'less-loader'
            ]
        }, {
            test: /\.css$/,
            use: [
                {
                    loader: "css-loader",
                    options: {
                        minimize: env === 'production' ? true : false
                    }
                }, 
                'postcss-loader'
            ]
        }, {
            test: /\.(png|jpg|gif|svg)/, 
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    outputPath: 'img/'
                }
            }]
        }, {
            test: /\.(webm|mp4)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    outputPath: 'img/'
                }
            }]
        },{
            test: /\.(eot|woff|ttf|otf)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    outputPath: 'fonts/'
                }
            }]
        } , {
            test: /\.html$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }, {
                loader: 'extract-loader'
            }, {
                loader: 'html-loader'
            }]
        }]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: env === 'production' ? true : false
        })
    ]

};