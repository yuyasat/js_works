var path = require('path');
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");

module.exports = {
  entry: {
    WorkList: './src/javascripts/work_list.js',
    HelloWorld: './src/javascripts/hello_world.js',
    LikeButton: './src/javascripts/like_button.js',
    ParentChildren: './src/javascripts/parent_children.js',
    ApiSample: './src/javascripts/api_sample.js',
    TodoApp: './src/javascripts/todo_app.js',
    PrePoje: './src/javascripts/pre_poje.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
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
