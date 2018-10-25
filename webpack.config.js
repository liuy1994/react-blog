const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist')
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loaders: ['babel-loader'],
        exclude: /node_module/
      },
      {
        test: /.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  devServer: {
    port: 9000,
    hot: true,
    inline: true,
    contentBase: path.resolve('./public'),
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" }
      }
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
