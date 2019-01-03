const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = (env) => ({
    entry: './src/lib/index.ts',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: 'index.js',
        sourceMapFilename: '[file].map',
        library: 'storyhooks',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.jsx' ],
    },
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
            }),
        ],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
        ],
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'React',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'ReactDOM',
            root: 'ReactDOM',
        },
        'styled-components': 'styled-components',
        'react-draggable': 'react-draggable',
        '@smooth-ui/core-sc': '@smooth-ui/core-sc',
        'react-color': 'react-color',
        'react-compound-slider': 'react-compound-slider',
        'react-feather': 'react-feather',
        'react-json-view': 'react-json-view',
        'react-popper': 'react-popper',
        'react-sparklines': 'react-sparklines',
    },
})
