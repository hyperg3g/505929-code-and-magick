'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var colorsHex = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var colorsRgb = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var colorsNames = ['black', 'red', 'blue', 'yellow', 'green'];

  var SetupDefaultCoords = {
    x: 0,
    y: 0
  };

  var setup = document.querySelector('.setup');
  var setupOpenBtn = document.querySelector('.setup-open');
  var setupCloseBtn = document.querySelector('.setup-close');
  var setupUserNameInput = document.querySelector('.setup-user-name');

  var setupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && document.activeElement !== setupUserNameInput) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    SetupDefaultCoords = {
      x: setup.offsetLeft,
      y: setup.offsetTop
    };
    document.addEventListener('keydown', setupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    setup.style.top = SetupDefaultCoords.y + 'px';
    setup.style.left = SetupDefaultCoords.x + 'px';
    document.removeEventListener('keydown', setupEscPress);
  };

  setupOpenBtn.addEventListener('click', function () {
    openPopup();
  });

  setupOpenBtn.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupCloseBtn.addEventListener('click', function () {
    closePopup();
  });

  setupCloseBtn.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardsEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var form = document.querySelector('.setup-wizard-form');

  wizardCoat.addEventListener('click', function () {
    var newColor = window.utilities.getRandomElementFromArray(colorsRgb);
    wizardCoat.style.fill = newColor;
    document.getElementsByName('coat-color')[0].value = newColor;
  });

  wizardsEyes.addEventListener('click', function () {
    var newColor = window.utilities.getRandomElementFromArray(colorsNames);
    wizardsEyes.style.fill = newColor;
    document.getElementsByName('eyes-color')[0].value = newColor;
  });

  wizardFireball.addEventListener('click', function () {
    var newColor = window.utilities.getRandomElementFromArray(colorsHex);
    wizardFireball.style.backgroundColor = newColor;
    document.getElementsByName('fireball-color')[0].value = newColor;
  });

  var errorHandle = function (message) {
    alert('Что-то пошло не так (' + message + ')'); // eslint-disable-line no-alert
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), closePopup, errorHandle);
  });

})();
