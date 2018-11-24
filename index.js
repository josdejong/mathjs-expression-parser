// Load the math.js core
var core = require('mathjs/core');

// Create a new, empty math.js instance
// It will only contain methods `import` and `config`
var math = core.create();

math.import(require('mathjs/lib/expression/function/parse'));
math.import(require('mathjs/lib/expression/function/compile'));
math.import(require('mathjs/lib/expression/function/eval'));

math.import(require('mathjs/lib/function/string/format'));

// create simple functions for all operators
math.import({
  // arithmetic
  add:        function (a, b) { return a + b },
  subtract:   function (a, b) { return a - b },
  multiply:   function (a, b) { return a * b },
  divide:     function (a, b) { return a / b },
  mod:        function (a, b) { return a % b },
  unaryPlus:  function (a) { return  a },
  unaryMinus: function (a) { return -a },

  // bitwise
  bitOr:           function (a, b) { return a | b },
  bitXor:          function (a, b) { return a ^ b },
  bitAnd:          function (a, b) { return a & b },
  bitNot:          function (a) { return ~a },
  leftShift:       function (a, b) { return a << b },
  rightArithShift: function (a, b) { return a >> b },
  rightLogShift:   function (a, b) { return a >>> b },

  // logical
  or:  function (a, b) { return !!(a || b) },
  xor: function (a, b) { return !!a !== !!b },
  and: function (a, b) { return !!(a && b) },
  not: function (a) { return !a },

  // relational
  equal:     function (a, b) { return a == b },
  unequal:   function (a, b) { return a != b },
  smaller:   function (a, b) { return a < b },
  larger:    function (a, b) { return a > b },
  smallerEq: function (a, b) { return a <= b },
  largerEq:  function (a, b) { return a >= b },

  // matrix
  // matrix: function (a) { return a },
  matrix: function () { 
    throw new Error('Matrices not supported')
  },
  index: function () {
    // TODO: create a simple index function
    throw new Error('Matrix indexes not supported')
  },

  // add pi and e as lowercase
  pi: Math.PI,
  e: Math.E,
  'true': true,
  'false': false,
  'null': null
})

// import everything from Math (like trigonometric functions)
var allFromMath = {};
Object.getOwnPropertyNames(Math).forEach(function (name) {
  // filter out stuff like Firefox's "toSource" method.
  if (!Object.prototype.hasOwnProperty(name)) {
    allFromMath[name] = Math[name];
  }
});
math.import(allFromMath);

module.exports = math;
