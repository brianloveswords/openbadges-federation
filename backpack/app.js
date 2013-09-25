const base64url = require('base64url')
const express = require('express');
const app = express();
const path = require('path');
const nunjucks = require('nunjucks');

const BACKPACK_NAME = process.env.NAME
const COLOR = process.env.COLOR

var badges = [];

var env = new nunjucks.Environment(new nunjucks.FileSystemLoader(__dirname + '/views'));
env.express(app);

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
  console.dir(badges)
  res.render('index.html', {
    name: BACKPACK_NAME,
    color: COLOR,
    badges: badges,
  })
})

app.get('/api/form/issue', function (req, res) {
  const badge = JSON.parse(base64url.decode(req.query.badges))

  badges = badges.filter(function (b) {
    return b !== badge
  }); badges.push(badge)

  res.render('added.html', {
    name: BACKPACK_NAME,
    color: COLOR,
    badgeImg: badge
  });
});

const PORT = process.env['PORT'] || 3001;
app.listen(PORT);
console.log('backpack', BACKPACK_NAME, 'started on', PORT);
