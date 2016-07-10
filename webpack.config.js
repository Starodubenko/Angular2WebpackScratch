'use strict';

const DEV_MODE = 'dev';
const PROD_MODE = 'prod';
const START_MODE = process.env.npm_lifecycle_event || DEV_MODE;
const webpack = require('webpack');
const path = require('path');
const rimraf = require('rimraf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const JasmineWebpackPlugin = require('jasmine-webpack-plugin');

let mode = START_MODE.split(':')[1];
let getBuildPath = function () {
    switch (mode) {
        case DEV_MODE:
            return __dirname + '/build/dev';
            break;
        case PROD_MODE:
            return __dirname + '/build/prod';
            break;
    }
};

let addHash = function (template, hash) {
    switch (mode) {
        case DEV_MODE:
            return template;
            break;
        case PROD_MODE:
            return template.replace(/\.[^.]+$/, `.[${hash}]$&`);
            break;
    }
};

console.log(START_MODE);
console.log(mode == DEV_MODE ? 'cheap-inline-module-source-map' : null);

module.exports = {
    context: path.resolve(__dirname, 'src'), //where webpack should find files.
    //enter points, using as main enter places, where includes are happened
    entry: {
        index: './index.ts',
        // 'login': './components/login/login.ts'
    },
    output: { //directory of build files.
        path: getBuildPath(),
        filename: addHash('[name].js', 'chunkhash'),
        chunkFilename: addHash('[name].js', 'chunkhash'),
        library: '[name]',
        publicPath: '/'
    },

    // watch: START_MODE == DEV_MODE, //rebuild if files was changed
    // watchOptions: {
    //     aggregateTimeout: 100
    // },

    //devtool that's a additional seting for debugging of code in browser
    devtool: mode == DEV_MODE ? 'cheap-inline-module-source-map' : null,

    plugins: [
        new webpack.DefinePlugin({
            BUILD_MODE: JSON.stringify(START_MODE)
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ExtractTextPlugin(addHash('[name].css', 'contenthash'), {allChunks: true, disable: mode == DEV_MODE}),
        new webpack.optimize.CommonsChunkPlugin({name: 'common'}),
        new JasmineWebpackPlugin(),
    ],

    module: { // defining of modules
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(require.resolve("style-loader"),
                    [require.resolve("css-loader"),
                    require.resolve("autoprefixer-loader"),
                    require.resolve("sass-loader")])
            },
            {
                test: /\.\/components\/*\/\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: addHash('file?[path][name].[ext]', 'hash:6')
            },
        ]
    },

    resolve: { //directory where libraries will be found.
        moduleDirections: ['./node_modules'],
        extensions: ['', '.js', '.ts']
    },
};