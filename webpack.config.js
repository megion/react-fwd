const path = require('path')
const ROOT = path.resolve(__dirname, 'src')
const webpack = require('webpack')

/**
 * Webpack Plugins
 */
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

var babelOptions = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: ['@babel/plugin-proposal-class-properties'],
}

module.exports = {
  context: ROOT,

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      //{
      //test: /\.js$/,
      //exclude: /node_modules/,
      //use: [
      //{
      //loader: 'babel-loader',
      //options: babelOptions,
      //},
      //],
      //},
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /.html$/,
        exclude: /index.html$/,
        use: 'html-loader',
      },
      {
        test: /\.css$/,
        // Adds CSS to the DOM by injecting a <style> tag
        use: [
          // Adds CSS to the DOM by injecting a <style> tag
          //{loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader},
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // css-loader interprets @import and url()
          // like import/require() and will resolve them
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          // creates style nodes from JS strings
          //{loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader},
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // translates CSS into CommonJS
          {
            loader: 'css-loader',
          },
          // compiles Less to CSS
          {
            loader: 'less-loader',
            //options: {
            //lessOptions: {
            ////paths: [path.resolve(__dirname, "node_modules")],
            //},
            //},
          },
        ],
      },
      {
        test: /\.(tpl|woff|ttf|otf|eot|woff2|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },

  plugins: [
    new LoaderOptionsPlugin({
      debug: true,
      options: {
        tslint: {
          configuration: require('./tslint.json'),
          typeCheck: true,
        },
      },
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      //filename: devMode ? '[name].css' : '[name].[hash].css',
      filename: '[name].css',
      //chunkFilename: devMode ? '[id].[name].css' : '[id].[name].[hash].css'
      chunkFilename: '[id].[name].css',
    }),
    new webpack.ProvidePlugin({
      //$: 'jquery',
      //jQuery: 'jquery',
      //'window.jQuery': 'jquery',
    }),
  ],
}