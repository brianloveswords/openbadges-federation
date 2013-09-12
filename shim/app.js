const fs = require('fs');
const express = require('express');
const app = express();

function serve(file, type) {
  app.get(file, function (req, res) {
    res.setHeader('Content-Type', type);
    res.send(fs.readFileSync(__dirname + file));
  });
};

serve('/lib.js', 'text/javascript');
serve('/bundle.js', 'text/javascript');
serve('/shim.js', 'text/javascript');
serve('/shim.html', 'text/html');

const port = process.env['PORT'] || 5000;
app.listen(port);
console.log('shim started on', port);
