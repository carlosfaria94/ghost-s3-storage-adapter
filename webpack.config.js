/* eslint-disable */
const path = require('path')
const { version } = require('./package.json')

module.exports = {
    entry: './index.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist', version),
        filename: 's3.js',
        libraryTarget: 'umd'
    }
}