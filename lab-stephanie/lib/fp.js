'use strict';


const fp = module.exports = {};

fp.map = (list, callback) => Array.prototype.map.call(list, callback);

fp.reduce = (list, callback) => Array.prototype.reduce.call(list, callback);

fp.filter = (list, callback) => Array.prototype.filter.call(list, callback);

fp.concat = (arg, args) => Array.prototype.concat.apply(arg, args);

fp.splice = (list, args) => Array.prototype.splice.apply(list, args);
