const base64url = require('base64url');
const OpenBadges = {};

OpenBadges.issue = function issue(badges) {
  const params = base64url(JSON.stringify(badges));
  const location = 'http://localhost:5000/shim.html?badges=' + params;
  const features = 'height=400,width=533,resizable=yes,scrollbars=no,menubar=no';
  window.open(location, '_blank', features);
}

OpenBadges.register = function register() {
  const location = 'http://localhost:5000/register.html?backpack=' + window.location.origin;
  const features = 'height=400,width=533,resizable=yes,scrollbars=no,menubar=no';
  window.open(location, '_blank', features);
}

window.OpenBadges = OpenBadges
