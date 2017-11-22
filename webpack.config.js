const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
    // another: './src/another-module.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
		// publicPath: '/'
	},
	module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    },
    devtool: 'inline-source-map',
    // devServer: {
    //   contentBase: './dist',
    //   hot: true
    // },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Code Splitting'
      }),
      new CleanWebpackPlugin(['./dist']),
      // new webpack.NamedModulesPlugin(),
      // new webpack.HotModuleReplacementPlugin(),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'common' // 指定公共 bundle 的名称。
      // })
      // new UglifyJSPlugin()
    ]
}