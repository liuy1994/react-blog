const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

module.exports = {
  mode: 'development',
  entry: {
    vendor: ['react'],
    app: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('/dist')
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
    // proxy: {
    //   "/blog": {
    //     target: "http://47.52.234.164:9000",
    //     pathRewrite: { "^/blog": "/" }
    //   }
    // },
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html'
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, '../'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
