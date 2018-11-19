'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var TEXT_FONT = '16px PT Mono';
var TEXT_COLOR = '#000000';
var CHART_HEIGHT = 150;
var COLUMN_GAP = 50;
var COLUMN_WIDTH = 40;

var renderCloud = function (ctx, x, y) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(x + 10, y + 10, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (text, x, y, ctx) {
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = TEXT_FONT;
  ctx.fillText(text, x, y);
};

var getMaxOfArray = function (numArray) {
  return Math.max.apply(null, numArray);
};

var getColumnHeightArray = function (times) {
  var arrayLength = times.length;
  var columnHeights = new Array(arrayLength);
  var maxPlayerTime = getMaxOfArray(times);
  for (var i = 0; i < arrayLength; i++) {
    columnHeights[i] = CHART_HEIGHT * times[i] / maxPlayerTime;
  }
  return columnHeights;
};

var renderChart = function (ctx, names, times) {
  var columnHeights = getColumnHeightArray(times);
  var fillColor;
  var x = 140;
  var y = 245;

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      fillColor = 'red';
    } else {
      var randomSaturate = Math.floor(Math.random() * (100 - 1)) + 1;
      fillColor = 'hsl(240, ' + randomSaturate + '%, 50%';
    }
    ctx.fillStyle = fillColor;
    ctx.fillRect(x, y, COLUMN_WIDTH, -columnHeights[i]);
    renderText(names[i], x, y + 20, ctx);
    renderText(Math.trunc(times[i]), x, y - columnHeights[i] - 10, ctx);
    x += COLUMN_GAP + COLUMN_WIDTH;
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 100, 10);
  renderText('Ура вы победили!', 120, 40, ctx);
  renderText('Список результатов:', 120, 60, ctx);
  renderChart(ctx, names, times);
};
