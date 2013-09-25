const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

const port = process.env['PORT'] || 5000;
app.listen(port);
console.log('shim started on', port);
