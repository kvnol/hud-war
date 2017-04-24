(function(win, doc) {
  'use strict';
  var button = doc.querySelector('[data-id="hw-header__button"]');
  var header = doc.querySelector('[data-id="hw-header"]');

  if (button) {
    button.addEventListener('click', function() {
      header.classList.toggle('active');
    }, false);
  }

})(window, document);