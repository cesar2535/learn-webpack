var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  devtool: 'eval',
  entry: './index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style!css!postcss',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg)/,
      loader: 'url',
      exclude: /node_modules/
    }]
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
}
