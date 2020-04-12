const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const {
    HashedModuleIdsPlugin
} = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new WebpackManifestPlugin(),
        new HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
        }),
        new Visualizer()
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, 'css-loader']
            }
        ]
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         cacheGroups: {
    //             // vendor: {
    //             //     test: /[\\/]node_modules[\\/]/,
    //             //     name: 'vendors',
    //             //     chunks: 'all'
    //             // },
    //             styles: {
    //                 name: 'styles',
    //                 test: /\.css$/,
    //                 chunks: 'all',
    //                 enforce: true,
    //             },
    //         },
    //         // 连接符
    //         automaticNameDelimiter: '-'
    //     }
    // }
}