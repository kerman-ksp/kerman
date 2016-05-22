process.bin = process.title = 'kerman';

var kerman = require('../');
var version = require('../version');
var cli = require('../utils/cli');

var options;
var command;

options = cli.parse({
  'version': { type: Boolean, shorthand: 'v' },
  'help': { type: Boolean, shorthand: 'h' }
});

if (options.version) {
  process.stdout.write(version + '\n');
  process.exit();
}

//command = 'help';
process.stdout.write(Object.keys(options).join() + '\n');
