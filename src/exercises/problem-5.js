import {trampoline} from "../helpers"

function findSmallestNumberDivisibleByIntegersUpTo( highestDivisor ) {
	function recur( highestDivisor, candidate ) {
		if ( isDivisibleByIntegersUpTo( highestDivisor, candidate ) ) return candidate;

		return recur.bind( null, highestDivisor, candidate+highestDivisor );
	}

	return trampoline( recur.bind( null, highestDivisor, highestDivisor ) );
}

function isDivisibleByIntegersUpTo(highestDivisor, target) {
	if ( highestDivisor < 2 ) return true;

	if ( target % highestDivisor === 0 ) return isDivisibleByIntegersUpTo( highestDivisor - 1, target );

	return false;
}

function primeApproach(highestDivisor) {
	return factor(highestDivisor);
}

function getHighestFactorPowers(highestDivisor, factorPowers=new Map()) {
	if (highestDivisor < 2) return factorPowers;

	let factors = factor(highestDivisor);
	let updatedFactorPowers = updateFactorPowers( factorPowers, factors );

	return getHighestFactorPowers( highestDivisor-1, updatedFactorPowers );
}

function updateFactorPowers( factorPowers, factors ) {
	let intermediateMap = a.reduce(function(map, b) {
		obj[b] = ++obj[b] || 1;
		return obj;
	}, {});
}

function factor(product) {
	let lowestPrime = getLowestPrime(product);
	let newProduct = product / lowestPrime;
	return (newProduct > 3) ? [lowestPrime, ...factor(newProduct)] : [lowestPrime];
}

function getLowestPrime(product) {
	function recur(product, attempt) {
		if (attempt > product / 2) {
			return product;
		} else if (product % attempt === 0) {
			return attempt;
		} else {
			return recur.bind(null, product, attempt+1);
		}
	}
	return trampoline(recur.bind(null, product, 2));
}

export { isDivisibleByIntegersUpTo, findSmallestNumberDivisibleByIntegersUpTo, primeApproach }