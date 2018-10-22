const webpack = require('webpack')
const path = require('path')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  devtool: 'eval',
  entry: [
    '../src/index.tsx'
  ],
  output: {
    filename: 'app-webpack.js',
    publicPath: 'webpack',
    path: path.resolve('webpack')
  },
  devServer: {
    port: 3333,
    historyApiFallback: true,
    inline: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
    modules: ['src', 'node_modules']
  },
  module: {
    loaders: [
      {test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'], include: path.resolve('src')}
    ]
  },
  plugins: [
    new WebpackNotifierPlugin(),
  ]
}