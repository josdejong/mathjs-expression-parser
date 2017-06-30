var math = require('../index')

function evaluate (expr, scope) {
  console.log(expr, '=', math.eval(expr, scope || {}));
}

evaluate('2.4 + 5');
evaluate('sqrt(16)');
evaluate('sin(pi / 4) ^ 2');
evaluate('2x', {x: 4});
