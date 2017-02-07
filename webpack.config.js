var path = require('path');
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");

module.exports = {
  entry: {
    HelloWorld: './src/javascripts/hello_world.js',
    LikeButton: './src/javascripts/like_button.js',
    ParentChildren: './src/javascripts/parent_children.js',
    ApiSample: './src/javascripts/api_sample.js',
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
    contentBase: './src/views',
    port: 5000
  }
}