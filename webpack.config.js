const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            title: 'Progressive Web Application'
        }),
        new CleanWebpackPlugin(),
        new WebpackManifestPlugin(),
        new WorkboxPlugin.GenerateSW({
            // clientsGlaim: true,
            skipWaiting: true
        })
    ]
}