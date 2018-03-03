const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV || 'development';

console.log(`process.env.NODE_ENV = ${NODE_ENV}`);

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.js'
    },

    // resolve: {
    //     modules: ["node_modules"],
    //     extensions: ['.js']
    // },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'webpack-bem-loader',
                            options: {
                                naming: 'react',
                                // levels: ['./src/components'],
                                // OR:
                                levels: {
                                    './src/components': {
                                        default: true,
                                        scheme: 'nested',
                                        naming: 'origin'
                                    }
                                },
                                techs: ['js', 'css'],
                                // techs: ['js'],
                                // techMap: {
                                //     js : ['js']
                                // }
                            }
                    },
                    {
                        loader: 'babel-loader'
                    }
                ]
            },

            {
                // test: /\.css$/,
                // use: [
                //     { loader: "style-loader" },
                //     // { loader: "css-loader" },
                //     {
                //         loader: "postcss-loader",
                //         options: {
                //             plugins: (loader) => [
                //                 // require('postcss-import')({ root: loader.resourcePath }),
                //                 // require('postcss-cssnext')(),
                //                 require('autoprefixer')(),
                //                 // require('cssnano')()
                //             ]
                //         }
                //     }
                // ],

                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {loader: "css-loader", options: { minimize: true }},
                        {loader: "postcss-loader" , options: {
                            plugins: () => [
                                // require('postcss-import')({ root: loader.resourcePath }),
                                // require('postcss-cssnext')(),
                                require('autoprefixer')(),
                                // require('cssnano')()
                            ]
                        }},
                    ]
                }),
            },
        ]
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'init-bem-react',
            template: 'src/index.html'
        }),
        new ExtractTextPlugin({
            filename: "index.css",
            disable: NODE_ENV === 'development'
        }),
    ],

    devServer: {
        contentBase: './public',
        hot: true
    },
};
