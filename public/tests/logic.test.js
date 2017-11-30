var logic = require('../../src/logic.js');
var test = require('tape');
var value = "a";
const data = [[
  2,
  "B59A2F15-0BC0-4167-AEBA-4FFD5FC8BDB6",
  2,
  1280924058,
  "386763",
  1280924058,
  "386763",
  null,
  "Albania",
  "AL",
  "ALB",
  "8",
  "41",
  "20",
  null
],
[
  3,
  "CF49ACAB-7418-487D-913F-A59F476D3C25",
  3,
  1280924058,
  "386763",
  1280924058,
  "386763",
  null,
  "Algeria",
  "DZ",
  "DZA",
  "12",
  "28",
  "3",
  null
]]
test('Test Logic File', function(t) {
  var actual = logic.checkAndFillter(value,data);
  var expected =["Albania","Algeria"];
  t.deepEqual(actual, expected,'TEST Logic File');
  t.end();
});

var v = "Albania";
test('Test Long and att', function(t) {
  var actual = logic.longAndatt(v,data);
  var expected =[41,20];
  t.deepEqual(actual, expected,'TEST Logic File');
  t.end();
});
