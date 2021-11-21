import * as webpack from 'webpack'
import path from 'path'
import { merge } from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import commonConfig from './webpack.config'

const config: webpack.Configuration = {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  watch: true,

  //devServer: {
  //contentBase: path.join(__dirname, 'public'),
  //compress: true,
  //port: 9000,
  //},

  output: {
    publicPath: './',
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js',
    library: '[name]',
    libraryTarget: 'umd',
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
      title: 'Demo',
      template: 'index.html',
      inject: true,
    }),
  ],
  entry: {
    demo: './demo.tsx',
  },
}
export default merge(commonConfig, config)
