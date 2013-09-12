(function (global, document) {
  const getEl = document.getElementById.bind(document);

  const input = getEl('js-location');
  const form = getEl('js-backpack-form');
  const badgesInput = getEl('js-badges-value');

  const path = '/api/form/issue';
  const query = window.location.search;

  const location = input.value;

  form.addEventListener('submit', function (e) {
    badgesInput.value = query.replace('?badges=', '');
    form.action = location + path + query;
  });

})(window, document);
