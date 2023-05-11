const path = require('path');
const { sources } = require('webpack');

module.exports = {
    entry: './src/js/main.js',
    devtool: 'source-map',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist/js'),
    }
};