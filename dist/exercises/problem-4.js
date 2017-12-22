'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.findLargestPalindrome = exports.isPalendrome = undefined;

var _helpers = require('../helpers');

function findLargestPalindrome(multiplicandLength) {
	var limit = Math.pow(10, multiplicandLength) - 1;

	function recur(n0, n1, limit, found) {
		var product = n0 * n1;

		if (n1 === limit && product <= found) return found;

		if (isPalendrome(product) && product > found) found = product;

		if (n1 > 1) {
			return recur.bind(null, n0, n1 - 1, limit, found);
		} else {
			return recur.bind(null, n0 - 1, limit, limit, found);
		}
	}

	return (0, _helpers.trampoline)(recur.bind(null, limit, limit, limit, 0));
}

function isPalendrome(val) {
	var str = val.toString();
	return str === str.split('').reverse().join('');
}

exports.isPalendrome = isPalendrome;
exports.findLargestPalindrome = findLargestPalindrome;
//# sourceMappingURL=problem-4.js.map