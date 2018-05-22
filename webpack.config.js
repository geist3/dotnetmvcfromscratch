const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './wwwroot/source/app.js',
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
              ]},
            { test: /\.js?$/,
        use: { loader: 'babel-loader', options: { presets: ['babel-preset-env']}}}]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'windows.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}