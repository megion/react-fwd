const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.js')
const DESTINATION = path.resolve(__dirname, 'dist')

module.exports = merge(commonConfig, {
  mode: 'production',
  //target: ["es5"],
  output: {
    path: DESTINATION,
    filename: 'js/[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: false,
  },
  /**
   * externals for exclude libs from result bundle
   */
  //externals: {
    //angular: {
      //commonjs: 'angular',
      //commonjs2: 'angular',
      //amd: 'angular',
      //root: 'angular', // indicates global variable
    //},
  //},
  entry: {
    fwd: './fwd-lib.ts',
  },
})
