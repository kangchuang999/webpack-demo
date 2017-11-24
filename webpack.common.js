  const path = require('path');
  const CleanWebpackPlugin = require('clean-webpack-plugin');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const webpack = require('webpack');

  module.exports = {
    entry: { // 入口文件可以有多个  出口只有一个，但不代表只有一个出口文件；
      main: './src/index.js',
      vendor: [
        'lodash'
      ]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].bundle.js', // 例如异步调用的代码块（非必需的）
      // publicPath: '/'
    },
    plugins: [
      new HtmlWebpackPlugin({  // 在产出目录生成一个html
        title: 'caching'
      }),
      new CleanWebpackPlugin(['./dist']), // 删除产出目录
      new webpack.optimize.CommonsChunkPlugin({ // 提取引入的公用代码块
        name: 'vendor'
      }),
      new webpack.optimize.CommonsChunkPlugin({ // 提取webpack自带的代码块
        name: 'runtime'
      })
    ]
  };