# mathjs-expression-parser

Just want to use the expression parser of `mathjs` for simple, numeric calculations? Here you go...

This custom build of `mathjs` contains just the expression parser and basic arithmetic functions for numbers. The expression parser contains full functionality for parsing, compiling, evaluating, and transforming expression trees. Support for Matrices, BigNumbers, Fractions, Complex numbers, Units, and all functions and constants that come with mathjs are excluded.

The size of `mathjs-expression-parser` is `30 KiB` when minified and gzipped (about a quarter of the size of `mathjs`).


## Install

```
npm install mathjs-expression-parser
```


## Use

### node.js

```js
var math = require('mathjs-expression-parser')

var expr = '2.4 + sqrt(x)';
evaluate('result', math.eval(expr, {x : 16})); // 6.4
```

### browser

```html
<!DOCTYPE html>
<html>
<head>
  <title>mathjs-expression-parser | basic usage</title>
  <script src="../dist/mathjs-expression-parser.js"></script>
</head>
<body>

<script>
  var expr = '2.4 + sqrt(x)';
  evaluate('result', math.eval(expr, {x : 16})); // 6.4
</script>

</body>
</html>
```

See the `examples` folder for more examples


## Test

To run unit tests, install dependencies, then run:

```
npm test
```


## Build

To build the bundled and minified library, install dependencies, then run:

```
npm run build
```


## Publish

- Update version number in `package.json`
- Describe changes in `CHANGELOG.md`
- Commit changes to git
- Publish `npm publish`
- Add git tag for current version


## Included functionality

Category | Functions / operators
----------- | -----
Core        | `import`, `config`
Expression  | `parse`, `compile`, `eval`
Operators   | `+`, `-`, `*`, `/`, `%`, `mod`, `|`, `^`, `&`, `~`, `<<`, `>>`, `>>>`, `and`, `or`, `xor`, `not`, `==`, `!=`, `<`, `>`, `<=`, `>=`
Arithmetic  | `abs`, `exp`, `log`, `sqrt`, `ceil`, `floor`, `random`, `round`
Trigonometry| `tan`, `sin`, `cos`, `acos`, `asin`, `atan`, `atan2`
Statistics  |  `max`, `min`
Constants   | `pi`, `e`, `true`, `false`, `null`
String      | `format`
Objects     | Creating objects and accessing properties

Note: on new browsers there are probably more functions available, since all functions and constants from `Math` are imported.


## License

MIT
