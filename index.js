import {
  create,
  parseDependencies,
  compileDependencies,
  evaluateDependencies,
  formatDependencies,
  subsetDependencies,
} from 'mathjs/number'

// Create a new, math.js instance
const math = create({
  ...parseDependencies,
  ...compileDependencies,
  ...evaluateDependencies,
  ...formatDependencies,
  ...subsetDependencies
})

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
  equal:     function (a, b) { return a === b },
  unequal:   function (a, b) { return a !== b },
  smaller:   function (a, b) { return a < b },
  larger:    function (a, b) { return a > b },
  smallerEq: function (a, b) { return a <= b },
  largerEq:  function (a, b) { return a >= b },

  // add pi and e as lowercase
  pi: Math.PI,
  e: Math.E,
  'true': true,
  'false': false,
  'null': null
})

// import everything from Math (like trigonometric functions)
const allFromMath = {}
Object.getOwnPropertyNames(Math).forEach(function (name) {
  // filter out stuff like Firefox's "toSource" method.
  if (!Object.prototype.hasOwnProperty(name)) {
    allFromMath[name] = Math[name]
  }
})
math.import(allFromMath)

export default math