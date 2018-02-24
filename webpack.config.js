const path = require('path');
const webpack = require('webpack');

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
                                        scheme: 'flat',
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
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: (loader) => [
                                // require('postcss-import')({ root: loader.resourcePath }),
                                // require('postcss-cssnext')(),
                                require('autoprefixer')(),
                                // require('cssnano')()
                            ]
                        }
                    }
                ],
            },
        ]
    },

    plugins: [
        // new CleanWebpackPlugin(['dist']),
        // new HtmlWebpackPlugin({
        //   title: 'Hot Module Replacement'
        // }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        contentBase: './public',
        hot: true
    },
};
