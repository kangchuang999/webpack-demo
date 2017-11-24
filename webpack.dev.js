  const merge = require('webpack-merge');
  const common = require('./webpack.common.js');
  const webpack = require('webpack');

  module.exports = merge(common, {
    devtool: 'inline-source-map', // 知道错误在那个文件；
    // devServer: {  // 配合 webpack-dev-server使用；
    //   contentBase: './dist'
    // }
    plugins: [
      // new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }), // 告诉webpack解压结果用于什么环境
      new webpack.HashedModuleIdsPlugin(), // 使webpack.optimize.CommonsChunkPlugin提取出来的模块hash不变；
    ]
  });