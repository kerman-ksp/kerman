var camelCase = require('camelcase');
var nopt = require('nopt');

function parse(options, argv) {
  var types = {};
  var shorthands = {};
  var noptResult = {};
  var result = {};
  var keys;

  Object.keys(options).map(function (name) {
    types[name] = options[name].type;
    shorthands[options[name].shorthand] = '--' + name;
  });

  noptResult = nopt(types, shorthands, argv);
  Object.keys(noptResult).map(function (name) {
    if (options[name]) {
      result[camelCase(name)] = noptResult[name];
    }
  });

  result.argv = noptResult.argv;
  return result;
}

module.exports.parse = parse;
