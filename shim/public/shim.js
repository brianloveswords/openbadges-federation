(function (global, document) {
  const DEFAULT_BACKPACK_KEY = 'defaultBackpackUrl'

  const getEl = document.getElementById.bind(document);

  const input = getEl('js-location');
  const locationElement = getEl('js-location');
  const form = getEl('js-backpack-form');
  const badgesInput = getEl('js-badges-value');
  const badgeImage = getEl('js-badge-image');

  const path = '/api/form/issue';
  const query = window.location.search;

  const imgUrl = JSON.parse(window.atob(query.replace('?badges=', '')));

  badgeImage.src = imgUrl

  form.addEventListener('submit', function (e) {
    const backpackUrl = locationElement.value;

    badgesInput.value = query.replace('?badges=', '');
    form.action = backpackUrl + path + query;
  });

  const defaultBackpackUrl =
    localStorage.getItem(DEFAULT_BACKPACK_KEY)

  if (defaultBackpackUrl)
    locationElement.value = defaultBackpackUrl

})(window, document);
