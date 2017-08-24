#!/usr/bin/env node
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var argv = require('yargs').argv;

function run(limit) {
	return [].concat(_toConsumableArray(new Array(limit).keys())).reduce(function (sum, i) {
		return sum + (i % 3 === 0 || i % 5 === 0 ? i : 0);
	}, 0);
}

if (argv.limit) {
	console.log(run(argv.limit));
}

exports.run = run;
//# sourceMappingURL=problem-1.js.map