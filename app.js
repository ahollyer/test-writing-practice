const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
});

app.listen(8000, function() {
  console.log('Listening on 8000');
});

exports.app = app;
