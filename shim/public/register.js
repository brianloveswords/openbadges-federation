(function (global, document) {
  const DEFAULT_BACKPACK_KEY = 'defaultBackpackUrl'

  const $ = document.querySelectorAll.bind(document);

  const query = window.location.search
  const backpackOrigin = query.replace('?backpack=', '')

  const label = $('#js-backpack-origin')[0]
  const confirmBtn = $('#js-confirm')[0]
  const cancelBtn = $('#js-cancel')[0]
  const replaceWarningEl = $('#js-replace-warning')[0]

  const currentDefault =
    localStorage.getItem(DEFAULT_BACKPACK_KEY)

  if (currentDefault)
    replaceWarningEl.textContent = 'This will replace ' + currentDefault + ' as your default backpack'

  label.textContent = backpackOrigin

  confirmBtn.addEventListener('click', function (evt) {
    localStorage.setItem(DEFAULT_BACKPACK_KEY, backpackOrigin)
    alert('confirmed!')
    window.close()
  })

  cancelBtn.addEventListener('click', function (evt) {
    alert('canceled!')
    window.close()
  })


})(window, document);
