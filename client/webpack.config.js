module.exports = function() {
  switch (process.env.NODE_ENV) {
    case 'production':
      return require('./config/webpack.config.prod');
    case 'development':
    default:
      return require('./config/webpack.config.dev');
  }
};