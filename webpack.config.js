const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './wwwroot/source/app.js',
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [ { test: /\.js?$/,
        use: { loader: 'babel-loader', options: { presets: ['babel-preset-env']}}}]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'windows.jQuery': 'jquery'
        })
    ]
}