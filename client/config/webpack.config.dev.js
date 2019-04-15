const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config.common');

module.exports = webpackMerge(common.config, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    app: ['react-hot-loader/patch', './index'],
  },
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        include: [common.localCssModulesPaths],
        use: [{ loader: 'style-loader' }].concat(common.localSassLoaders),
      },
      {
        test: /\.(scss|sass)$/,
        exclude: [common.localCssModulesPaths],
        use: [{ loader: 'style-loader' }].concat(common.globalSassLoaders),
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './favicon.ico',
      inject: true,
    }),
  ],
  optimization: {
    namedModules: true,
  },
  devServer: {
    hot: true,
    port: 3001,
    historyApiFallback: true,
    stats: 'errors-only',
  },
});