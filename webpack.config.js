const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: process.env.NODE_ENV === 'development'
});

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + 'dist/'
    },
    devtool: 'source-map', // any 'source-map'-like devtool is possible
    module: {
        loaders: [
            {
                test: /\.scss|css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader', options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader', options: {
                        sourceMap: true
                    }
                }]
            }
            , {
                test: /\.(jpg|png)$/,
                loader: [
                    'file-loader?name=./dist/img/[hash].[ext]'
                ]
            }
            , {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
    , plugins: [
        new HtmlWebpackPlugin({
            template: '!!pug-loader!./src/index.pug',
            // inject: false,
            // template: require('html-webpack-template-pug'),
            // Optional 
            // appMountId: 'app',
            // appMountId: ['app1', 'app2'] 
            mobile: true,
            // injectExtras: {
            //     head: [
            //         "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css",
            //         {
            //             tag: 'link',
            //             rel: 'dns-prefetch',
            //             href: '//example.com/'
            //         },
            //         {
            //             tag: 'base',
            //             href: '../assets/page.html'
            //         },
            //         {
            //             tag: 'meta',
            //             name: 'description',
            //             content: 'A description of the page'
            //         }
            //     ],
            //     body: [
            //         'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js',
            //         'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js',
            //         {
            //             tag: 'noscript',
            //             innerHTML: "JavaScript is disabled in your browser. <a href='http://www.enable-javascript.com/' target='_blank'>Here</a> is how to enable it."
            //         }
            //     ]
            // },
            title: "uiwwnw's scss animation"
        })
    ]

};

// if (process.env.NODE_ENV === 'production') {
//     config.devtool = false;
//     config.plugins = [
//         new webpack.optimize.OccurenceOrderPlugin(),
//         new webpack.optimize.UglifyJsPlugin({ comments: false }),
//         new webpack.DefinePlugin({
//             'process.env': { NODE_ENV: JSON.stringify('production') }
//         })
//     ];
// }


module.exports = config;