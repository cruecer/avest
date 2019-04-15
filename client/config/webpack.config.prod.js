const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.config.common');

const extractStyles = new ExtractTextPlugin({ filename: '[name].[chunkhash].css' });

const root = path.resolve('./');

module.exports = webpackMerge(common.config, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: './index',
  },
  output: {
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: ['babel-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        exclude: [common.localCssModulesPaths],
        use: extractStyles.extract({
          use: common.globalSassLoaders,
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(scss|sass)$/,
        include: [common.localCssModulesPaths],
        use: extractStyles.extract({
          use: common.localSassLoaders,
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve('./dist')], {
      root,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './favicon.ico',
      inject: true,
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: false,
      },
    }),
    extractStyles,
  ],
});