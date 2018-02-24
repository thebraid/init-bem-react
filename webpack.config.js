const path = require('path');

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
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: [{
					loader: 'babel-loader'
				}]
        }]
    }
};
