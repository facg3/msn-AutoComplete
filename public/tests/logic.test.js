var checkAndFillter = require('../../src/logic.js');
var test = require('tape');
const value = "a";
const data = [{"name": "Afghanistan", "code": "AF"},{"name": "Aland Islands", "code": "AX"}]
test('Test Logic File', function(t) {
  var actual = checkAndFillter(value,data);
  var expected =["Afghanistan","Aland Islands"];
  t.deepEqual(actual, expected,'TEST Logic File');
  t.end();
});
