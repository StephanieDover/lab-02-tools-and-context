'use strict';

const fp = require('./lib/fp.js');

console.log('argv', fp.map(process.argv, n => n.toUpperCase()));
