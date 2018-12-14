'use strict';

(function () {
  var WIZARDS_AMOUNT = 4;

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizard = function (wizard) {
    var wizardTemp = similarWizardTemplate.cloneNode(true);

    wizardTemp.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardTemp.querySelector('.wizard-coat').style.fill = wizard.colorCoat;

    return wizardTemp;
  };

  var successHandle = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    document.querySelector('.setup-similar-list').appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandle = function (message) {
    var errorNode = document.createElement('div');

    errorNode.innerText = 'Здесь должны быть маги, но тут Error: ' + message;
    errorNode.style.margin = '0 auto';

    document.querySelector('.setup-similar-list').appendChild(errorNode);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(successHandle, errorHandle);
})();
