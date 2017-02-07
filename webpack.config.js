var path = require('path');
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");

module.exports = {
  entry: {
    HelloWorld: './src/hello_world.js',
    LikeButton: './src/like_button.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader?stage=0',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  devServer: {
    hot: true,
    contentBase: './src',
    port: 5000
  }
}
