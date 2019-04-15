const express = require('express');
const app = express();

app.use(express.static(__dirname + '/static'));

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/static/index.html')
});

app.listen(9000, () => {
  console.log('App listen on port 9000')
});