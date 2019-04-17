const express = require('express');
const router = express.Router();
const log = require('../utils/logger')(module);
const User = require('../models/user').User;
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
      User.findOne({nickName: body.userName}, (err, user) => {
        if (err) throw log.error(err);
        if (!user) {
          return res.send(JSON.stringify({isError: true, errorMsg: 'No such User!'}));
        } else {
          if (!user.checkPSW(body.password)) {
            return res.send(JSON.stringify({isError: true, errorMsg: 'Invalid Passord!'}))
          } else {
            return setTimeout(() => res.send(JSON.stringify({isError: false, user: userDataResponse(user)})), 1000);  // TODO: del timeout
          }
        }
      });
    })
  }
})

module.exports = router;