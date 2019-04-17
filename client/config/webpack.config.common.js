const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = {
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../../api/app/static'),
};

const localCssModulesPaths = [path.resolve('./src/containers'), path.resolve('./src/components')];

const localSassLoaders = [
  {
    loader: 'css-loader',
    options: {
      url: false,
      modules: true,
      importLoaders: 1,
      localIdentName: '[local]-[hash:base64:3]',
    },
  },
  { loader: 'sass-loader' },
];

const globalSassLoaders = [{ loader: 'css-loader' }, { loader: 'sass-loader' }];

const config = {
  context: paths.src,
  output: {
    path: paths.dist,
    publicPath: '/',
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve('./src/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  }
};

module.exports = {
  config,
  localCssModulesPaths,
  localSassLoaders,
  globalSassLoaders,
};