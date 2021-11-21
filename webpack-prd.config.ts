import * as webpack from 'webpack'
import path from 'path'
import { merge } from 'webpack-merge'
import commonConfig from './webpack.config'

const config: webpack.Configuration = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    library: '[name]',
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: false,
  },
  entry: {
    fwd: './fwd',
  },
}
export default merge(commonConfig, config)
