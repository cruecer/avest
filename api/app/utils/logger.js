const winston = require('winston');
const ENV = process.env.NODE_ENV;

const MyLogger = function (module) {

  const path = module.filename.split('\\').slice(-2).join('\\');
  const MyFormat = winston.format.printf(({level, label, message}) => {
    return `${level} - [${label}] : ${message} `;
  })
  
  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log', level: 'info' })
    ]
  });
  
  if (ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.label({label: path}),
        MyFormat
      )
    }))
  };

  return logger
}

module.exports = MyLogger;