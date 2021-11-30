import path from 'path'
import * as webpack from 'webpack'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'

const config: webpack.Configuration = {
  context: path.resolve(__dirname, 'src'),

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
          },
        ],
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
    new ESLintPlugin({
      exclude: ['node_modules'],
      extensions: ['ts'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
}

export default config
