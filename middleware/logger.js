const moment = require('moment'); //for current date
const logger = (req, res, next) => {
  //console.log('hello');
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
  next();
}

module.exports = logger;