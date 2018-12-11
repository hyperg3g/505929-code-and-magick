'use strict';

(function () {
  window.utilities = {
    getMaxOfArray: function (numArray) {
      return Math.max.apply(null, numArray);
    },
    getRandomElementFromArray: function (array) {
      var randomNumber = Math.floor(Math.random() * array.length);
      return array[randomNumber];
    }
  };
})();
