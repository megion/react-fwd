const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DESTINATION = path.resolve(__dirname, 'public')

module.exports = merge(commonConfig, {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
  },

  output: {
    publicPath: './',
    path: DESTINATION,
    filename: 'js/[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  },

  optimization: {
    chunkIds: 'named',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React demo (typescript)',
      template: 'index.html',
      inject: true,
    }),
  ],
  entry: {
    demo: './demo.ts',
  },
})
