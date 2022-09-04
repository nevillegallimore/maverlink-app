// import system dependencies
const path = require('path');

////////////////////////////////////////////////////////////////////////////////////////////////////

const configuration = {
    devtool: 'source-map',
    entry: {
        main: './client/main.tsx',
    },
    mode: 'development',
    module: {
        rules: [
            { test: /\.(ts|tsx)$/, exclude: /node_modules/, use: ['babel-loader'] }
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './build/js'),
    },
    resolve: {
        alias: {
            '@client': path.resolve(__dirname, './client'),
            '@server': path.resolve(__dirname, './server'),
        },
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '*'],
    },
};

////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = configuration;
