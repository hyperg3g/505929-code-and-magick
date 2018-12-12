'use strict';

(function () {
  var WIZARDS_AMOUNT = 4;
  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnames = ['де Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницая', 'Нионго', 'Ирвинг'];
  var colorsRgb = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var colorsNames = ['black', 'red', 'blue', 'yellow', 'green'];

  var generateWizard = function () {
    var fullName = window.utilities.getRandomElementFromArray(names) + ' '
      + window.utilities.getRandomElementFromArray(surnames);
    var coatColor = window.utilities.getRandomElementFromArray(colorsRgb);
    var eyesColor = window.utilities.getRandomElementFromArray(colorsNames);
    return {name: fullName, coatColor: coatColor, eyesColor: eyesColor};
  };

  var getWizardsArray = function (amount) {
    var wizardsArray = new Array(amount);
    for (var i = 0; i < amount; i++) {
      wizardsArray[i] = generateWizard();
    }
    return wizardsArray;
  };

  var wizards = getWizardsArray(WIZARDS_AMOUNT);
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');

  var createWizardsNode = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      var similarWizard = wizardTemplate.cloneNode(true);
      similarWizard.querySelector('.setup-similar-label').innerHTML = wizards[i].name;
      similarWizard.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
      similarWizard.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
      fragment.appendChild(similarWizard);
    }
    return fragment;
  };

  window.wizards = {
    createWizardsNode: createWizardsNode,
    colorsNames: colorsNames,
    colorsRgb: colorsRgb
  };
})();
