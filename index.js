#! /usr/bin/env node
let actions = require('./actions');

var argv = require('minimist')(process.argv.slice(2));
if (argv._[0] === 'new') {
  if (argv._[1] === 'app') {
    actions.newApp(argv._[2]);
    console.log(argv);
  }
}
