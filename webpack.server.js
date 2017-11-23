const path = require('path')

module.exports = {
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

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            'flow',
            ['env', { tagets: { browsers: ['last 2 versions'] } }],
          ],
        },
      },
    ],
  },
}
