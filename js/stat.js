'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_COLOR = '#ffffff';
var CLOUD_BGCOLOR = 'rgba(0, 0, 0, 0.7)';
var TEXT_FONT = '16px PT Mono';
var TEXT_COLOR = '#000000';
var CHART_HEIGHT = 150;
var ChartPosition = {
  x: 140,
  y: 245
};
var TEXT_LINE1 = 'Ура вы победили!';
var TEXT_LINE2 = 'Список результатов:';
var TextLinePosition1 = {
  x: 120,
  y: 40
};
var TextLinePosition2 = {
  x: 120,
  y: 60
};
var COLUMN_GAP = 50;
var COLUMN_WIDTH = 40;
var SUP_RANGE = 100;
var NAME_GAP = 20;
var SCORE_GAP = 10;

var renderCloud = function (ctx, x, y) {
  ctx.fillStyle = CLOUD_BGCOLOR;
  ctx.fillRect(x + 10, y + 10, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = CLOUD_COLOR;
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

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      fillColor = 'red';
    } else {
      var randomSaturate = Math.floor(Math.random() * (SUP_RANGE - 1)) + 1;
      fillColor = 'hsl(240, ' + randomSaturate + '%, 50%';
    }
    ctx.fillStyle = fillColor;
    ctx.fillRect(ChartPosition.x, ChartPosition.y, COLUMN_WIDTH, -columnHeights[i]);
    renderText(names[i], ChartPosition.x, ChartPosition.y + NAME_GAP, ctx);
    renderText(Math.trunc(times[i]), ChartPosition.x, ChartPosition.y - columnHeights[i] - SCORE_GAP, ctx);
    ChartPosition.x += COLUMN_GAP + COLUMN_WIDTH;
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 100, 10);
  renderText(TEXT_LINE1, TextLinePosition1.x, TextLinePosition1.y, ctx);
  renderText(TEXT_LINE2, TextLinePosition2.x, TextLinePosition2.y, ctx);
  renderChart(ctx, names, times);
};
