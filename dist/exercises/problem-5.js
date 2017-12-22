"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.primeApproach = exports.findSmallestNumberDivisibleByIntegersUpTo = exports.isDivisibleByIntegersUpTo = undefined;

var _helpers = require("../helpers");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function findSmallestNumberDivisibleByIntegersUpTo(highestDivisor) {
	function recur(highestDivisor, candidate) {
		if (isDivisibleByIntegersUpTo(highestDivisor, candidate)) return candidate;

		return recur.bind(null, highestDivisor, candidate + highestDivisor);
	}

	return (0, _helpers.trampoline)(recur.bind(null, highestDivisor, highestDivisor));
}

function isDivisibleByIntegersUpTo(highestDivisor, target) {
	if (highestDivisor < 2) return true;

	if (target % highestDivisor === 0) return isDivisibleByIntegersUpTo(highestDivisor - 1, target);

	return false;
}

function primeApproach(highestDivisor) {
	return factor(highestDivisor);
}

function getHighestFactorPowers(highestDivisor) {
	var factorPowers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Map();

	if (highestDivisor < 2) return factorPowers;

	var factors = factor(highestDivisor);
	var updatedFactorPowers = updateFactorPowers(factorPowers, factors);

	return getHighestFactorPowers(highestDivisor - 1, updatedFactorPowers);
}

function updateFactorPowers(factorPowers, factors) {
	var intermediateMap = a.reduce(function (map, b) {
		obj[b] = ++obj[b] || 1;
		return obj;
	}, {});
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

exports.isDivisibleByIntegersUpTo = isDivisibleByIntegersUpTo;
exports.findSmallestNumberDivisibleByIntegersUpTo = findSmallestNumberDivisibleByIntegersUpTo;
exports.primeApproach = primeApproach;
//# sourceMappingURL=problem-5.js.map