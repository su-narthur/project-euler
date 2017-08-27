#!/usr/bin/env node
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var argv = require('yargs').argv;

function run(limit) {
	var sequence = buildFibSequence(limit);
	return sequence.reduce(function (sum, value) {
		return sum + (value % 2 === 0 ? value : 0);
	}, 0);
}

function buildFibSequence(limit) {
	var carry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [1, 2];

	var nextTerm = (carry[carry.length - 1] || 0) + (carry[carry.length - 2] || 0);
	return nextTerm > limit ? carry : buildFibSequence(limit, [].concat(_toConsumableArray(carry), [nextTerm]));
}

if (argv.limit) {
	console.log(run(argv.limit));
}

exports.run = run;
//# sourceMappingURL=problem-2.js.map