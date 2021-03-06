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
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
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
        test: /\.s[ac]ss$/i,
        use: [
          // creates style nodes from JS strings
          //process.env.NODE_ENV !== "production"
            //? "style-loader"
            //: MiniCssExtractPlugin.loader,
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/inline',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
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
  ],
}
