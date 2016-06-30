'use strict';

const DEV_MODE = 'build:dev';
const PROD_MODE = 'build:prod';
const BUILD_MODE = process.env.npm_lifecycle_event || DEV_MODE;
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let getBuildPath = function () {
    switch (BUILD_MODE) {
        case DEV_MODE:
            return __dirname + '/build/dev';
            break;
        case PROD_MODE:
            return __dirname + '/build/prod';
            break;
    }
};

console.log(BUILD_MODE);

module.exports = {
    context: path.resolve(__dirname, 'src'), //where webpack should find files.
    //enter points, using as main enter places, where includes are happened
    entry: {
        'index': './index.ts',
        // 'login': './components/login/login.ts'
    },
    output: { //directory of build files.
        path: getBuildPath(),
        filename: '[name].js',
        library: '[name]'
    },

    watch: BUILD_MODE == DEV_MODE, //rebuild if files was changed
    watchOptions: {
        aggregateTimeout: 100
    },

    //devtool that's a additional seting for debugging of code in browser
    devtool: BUILD_MODE == DEV_MODE ? 'cheap-inline-module-source-map' : null,

    plugins: [
        new webpack.DefinePlugin({
            BUILD_MODE: JSON.stringify(BUILD_MODE)
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ExtractTextPlugin('[name].css', {allChunks: true}),
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js')
    ],

    resolve: { //directory where libraries will be found.
        moduleDirections: ['./node_modules'],
        extensions: ['', '.js', '.ts']
    },

    resolveLoader: { // //directory where loaders will be found.
        modulesDirectories: ['./node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '*.js', '*.ts']
    },

    module: { // defining of modules
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    require.resolve("style-loader"),
                    require.resolve("css-loader"),
                    require.resolve("autoprefixer-loader"),
                    require.resolve("sass-loader")
                )
            },
            {
                test: /\.\/components\/*\/\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'file?[path][name].[ext]'
            },
        ]
    }
};