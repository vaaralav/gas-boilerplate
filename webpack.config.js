/* eslint-env node */
const path = require('path');
const GasPlugin = require('gas-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ES3ifyPlugin = require('es3ify-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'none',
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
        },
      },
    ],
  },
  plugins: [
    new ES3ifyPlugin(), // ES3ify node_modules imports
    new GasPlugin(), // Generate top level function declarations from `global`
    new LodashModuleReplacementPlugin(),
  ],
};
