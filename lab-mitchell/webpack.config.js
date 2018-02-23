'use strict';

const HtmlPlugin = require('html-webpack-plugin'); //helps when using the [hash] things
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //for the CSS things

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'source-map',
  entry: `${__dirname}/src/main.js`,
  output: {
    filename: 'build-[hash].js',
    path: `${__dirname}/build`,
    publicPath: '/',
  },
  plugins: [
    new HtmlPlugin({template: `${__dirname}/src/index.html`}),
    new ExtractTextPlugin('bundle-[hash].css'),
  ],
  module: {
    rules: [ //which files do we want to process
      {
        test: /\.js$/, // the $ means THE END of the thing, not every. the regex is already the every part
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
    ]
  },
}