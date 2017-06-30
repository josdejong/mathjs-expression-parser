var assert = assert = require('assert');
var math = require ('../index');

describe('mathjs-expression-parser', function() {

  it('parse', function() {
    var scope = {a: 4};
    var tree = math.parse('2a');
    assert.equal(tree.compile().eval(scope), 8);
  });

  it('compile', function() {
    var scope = {a: 4};
    var expr = math.compile('2a');
    assert.equal(expr.eval(scope), 8);
  });

  it('eval', function() {
    var scope = {a: 4};
    assert.equal(math.eval('a', scope), 4);
  });

  it('operators', function() {
    assert.equal(math.eval('2 + 3'), 5);
    assert.equal(math.eval('5 - 2'), 3);
    assert.equal(math.eval('2 * 3'), 6);
    assert.equal(math.eval('6 / 2'), 3);
    assert.equal(math.eval('+2'), 2);
    assert.equal(math.eval('-2'), -2);
    assert.equal(math.eval('8 % 3'), 2);
    assert.equal(math.eval('8 mod 3'), 2);

    assert.equal(math.eval('5 | 2'), 7);
    assert.equal(math.eval('6 & 2'), 2);
    assert.equal(math.eval('6 ^| 2'), 4);
    assert.equal(math.eval('~6'), -7);
    assert.equal(math.eval('8 << 2'), 32);
    assert.equal(math.eval('8 >> 2'), 2);
    assert.equal(math.eval('8 >>> 2'), 2);

    assert.equal(math.eval('true and false'), false);
    assert.equal(math.eval('true or false'), true);
    assert.equal(math.eval('true xor false'), true);
    assert.equal(math.eval('not true'), false);

    assert.equal(math.eval('2 == 2'), true);
    assert.equal(math.eval('2 != 2'), false);
    assert.equal(math.eval('2 < 2'), false);
    assert.equal(math.eval('2 > 2'), false);
    assert.equal(math.eval('2 <= 2'), true);
    assert.equal(math.eval('2 >= 2'), true);
  });

  it('arithmetic', function() {
    assert.equal(math.eval('abs(-4)'), 4);
    assert.equal(math.eval('exp(1)'), Math.E);
    assert.equal(math.eval('log(e)'), 1);
    assert.equal(math.eval('sqrt(16)'), 4);
    assert.equal(math.eval('ceil(3.2)'), 4);
    assert.equal(math.eval('floor(3.8)'), 3);
    assert.equal(math.eval('round(3.8)'), 4);
    assert.equal(typeof math.eval('random()'), 'number');
  });

  it('trigonometry', function() {
    assert.equal(math.eval('tan(2)'), Math.tan(2));
    assert.equal(math.eval('sin(2)'), Math.sin(2));
    assert.equal(math.eval('cos(2)'), Math.cos(2));
    assert.equal(math.eval('acos(0.5)'), Math.acos(0.5));
    assert.equal(math.eval('asin(0.5)'), Math.asin(0.5));
    assert.equal(math.eval('atan(0.5)'), Math.atan(0.5));
    assert.equal(math.eval('atan2(2,2)'), Math.atan2(2,2));
  });

  it('statistics', function() {
    assert.equal(math.eval('max(1,4,2)'), 4);
    assert.equal(math.eval('min(4,1,2)'), 1);
  });

  it('variables', function() {
    var scope = {a: 2};
    assert.deepEqual(math.eval('a', scope), 2);
    assert.deepEqual(math.eval('b=4', scope), 4);
    assert.deepEqual(scope, {a: 2, b: 4})
  });

  it('object', function() {
    assert.deepEqual(math.eval('{a: 2, b: 4}'), {a: 2, b: 4});
    assert.deepEqual(math.eval('obj.a', {obj: {a: 2, b: 4}}), 2);

    var scope = {obj: {a: 2}}
    assert.deepEqual(math.eval('obj.a=4', scope), 4);
    assert.deepEqual(scope, {obj: {a: 4}})
  });

  it('constants', function() {
    assert.equal(math.eval('pi'), Math.PI);
    assert.equal(math.eval('e'), Math.E);
    assert.equal(math.eval('true'), true);
    assert.equal(math.eval('false'), false);
    assert.equal(math.eval('null'), null);
  });

  it('format', function() {
    assert.equal(math.format(math.pi, 3), '3.14');
  });
});