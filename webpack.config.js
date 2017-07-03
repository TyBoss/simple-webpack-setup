var webpack = require('webpack')
var path = require('path')

var srcPath = path.join(__dirname, 'src/js')
var distPath = path.join(__dirname, '/dist/js')

module.exports = {
  watch: true,
  cache: true,
  devtool: '#cheap-module-eval-source-map',
  context: srcPath,
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  },
  entry: {
    app: './app.js'
  },
  output: {
    path: distPath,
    filename: '[name].bundle.js'
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
