const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send(fs.readFileSync(__dirname + '/index.html'));
});

const port = process.env['PORT'] || 3002;
app.listen(port);
console.log('issuer started on', port);
