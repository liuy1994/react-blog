const path = require('path')

module.exports = {
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, './src/index.js')],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style!css',
        include: __dirname + '/src'
      }, {
        test: /\.less$/,
        loader: 'style!css!less',
        include: __dirname + '/src'
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        loader: 'babel',
        include: __dirname + '/src'
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      }
    ]
  },
  resolve: {
    extensions: ['.js', 'jsx']
  }
}