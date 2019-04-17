const express = require('express');
const router = express.Router();
const log = require('../utils/logger')(module);
const User = require('../models/user').User;
const dataValidator = require('../utils/dataValidator');
const userDataResponse = require('../utils/userDataResponse');

router.post('/', (req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      if (body.length > 1e6) { 
        request.connection.destroy();
      }
    });

    req.on('end', () => {
      body = JSON.parse(body);
      const result = dataValidator(body);
      if (!result.isError) {

        const user = new User({
            nickName: body.nickname,
            email: body.email,
            psw: body.password
          });

          user.save((err, user, affected) => {
            if (err) {
              log.error(err);
              return res.send(JSON.stringify({isError: true , errorMsg: 'The user is already exist'}));
            };
            return setTimeout(() => res.send(JSON.stringify({isError: false, user: userDataResponse(user)})), 1000); //TODO: del timeout
          })
      } else {
        res.send(JSON.stringify(result));
      }
    })
  }
})

module.exports = router;