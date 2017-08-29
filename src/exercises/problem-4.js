import {trampoline} from "../helpers"

function findLargestPalindrome(multiplicandLength) {
	let limit = Math.pow(10, multiplicandLength) - 1;

	function recur(n0, n1, limit, found) {
		let product = n0*n1;

		if (n1 === limit && product <= found) return found;

		if ( isPalendrome(product) && product > found ) found = product;

		if (n1 > 1) {
			return recur.bind( null, n0, n1-1, limit, found );
		} else {
			return recur.bind( null, n0-1, limit, limit, found );
		}
	}

	return trampoline(recur.bind(null, limit, limit, limit, 0))
}

function isPalendrome( val ) {
	let str = val.toString();
	return str === str.split('').reverse().join('');
}

export { isPalendrome, findLargestPalindrome }