const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
  // Inform webpack we are building a bundle for nodeJs
  // rather than for the browser
  target: 'node',

  // root
  entry: './src/index.js',

  // Where webpack should put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  externals: [webpackNodeExternals()],
}

module.exports = merge(baseConfig, config)
