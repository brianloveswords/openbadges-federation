const base64url = require('base64url');
const OpenBadges = {};

OpenBadges.issue = function issue(badges) {
  const params = base64url(JSON.stringify(badges));
  const location = 'http://localhost:5000/shim.html?badges=' + params;
  const features = 'height=233,width=433,resizable=yes,scrollbars=no,menubar=no';
  window.open(location, '_blank', features);
};

module.exports = OpenBadges;
