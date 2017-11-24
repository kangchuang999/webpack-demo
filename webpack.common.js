  const path = require('path');
  const CleanWebpackPlugin = require('clean-webpack-plugin');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
 
  module.exports = {
    entry: {
      app: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      publicPath: '/'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Production'
      }),
      new CleanWebpackPlugin(['./dist'])
    ]
  };