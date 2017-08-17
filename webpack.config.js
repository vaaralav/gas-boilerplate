/* eslint-env node */
const path = require('path');
const GasPlugin = require('gas-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'flow', 'gas'],
          },
        },
      },
    ],
  },
  plugins: [new GasPlugin()],
};
