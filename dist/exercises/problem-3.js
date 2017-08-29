#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.run = undefined;

var _helpers = require("../helpers");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var argv = require('yargs').argv;

function run(product) {
	var primes = factor(product);
	return Math.max.apply(Math, _toConsumableArray(primes));
}

function factor(product) {
	var lowestPrime = getLowestPrime(product);
	var newProduct = product / lowestPrime;
	return newProduct > 3 ? [lowestPrime].concat(_toConsumableArray(factor(newProduct))) : [lowestPrime];
}

function getLowestPrime(product) {
	function recur(product, attempt) {
		if (attempt > product / 2) {
			return product;
		} else if (product % attempt === 0) {
			return attempt;
		} else {
			return recur.bind(null, product, attempt + 1);
		}
	}
	return (0, _helpers.trampoline)(recur.bind(null, product, 2));
}

if (argv.product) {
	console.log(run(argv.product));
}

exports.run = run;
//# sourceMappingURL=problem-3.js.map