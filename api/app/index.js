const express = require('express');
const log = require('./utils/logger')(module);
const app = express();

const logInRouter = require('./routes/logIn');
const registerRouter = require('./routes/register');

app.use(express.static(__dirname + '/static'));
app.use('/login', logInRouter);
app.use('/reg', registerRouter);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html')
});

app.listen(9000, () => {
  log.info('App listen on port 9000')
});