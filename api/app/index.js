const express = require('express');
const log = require('./utils/logger')(module);
const dataValidator = require('./utils/dataValidator');
const User = require('./models/user').User;
const app = express();

app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html')
});

app.post('/login', (req, res) => {
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
            return res.send(JSON.stringify({isError: false, errorMsg: `Hello`})); 
          }
        }
      });
    })
  }
})

app.post('/reg', (req, res) => {
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
      console.log(body);
      const result = dataValidator(body);
      if (!result.status) {

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
            return res.send(JSON.stringify({isError: false, errorMsg: 'Hi'}));
          })
      } else {
        res.send(JSON.stringify(result));
      }
    })
  }
})

app.listen(9000, () => {
  log.info('App listen on port 9000')
});