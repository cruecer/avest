const config = require('../config/config');

const crypto = require('crypto');

const mongoose = require('mongoose');
mongoose.connect(config.dbUri, config.dbParam);
const Schema = mongoose.Schema;

const schema = new Schema({
  nickName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  hashedPSW: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    dafault: Date.now
  }
});

schema.methods.encryptPSW = (psw, salt) => {
  return crypto.createHmac('sha1', salt).update(psw).digest('hex');
};


schema.virtual('psw')
  .set(function (psw) {
    this._plainPSW = psw;
    this.salt = Math.random() + '';

    this.hashedPSW = this.encryptPSW(psw, this.salt);
  })
  .get(function () {return this._plainPSW});

  schema.methods.checkPSW = function (psw) {
    return this.encryptPSW(psw, this.salt) === this.hashedPSW;
  };

  exports.User = mongoose.model('User', schema, 'users');