#!/usr/bin/env node

import {trampoline} from "../helpers"

const argv = require('yargs').argv;

function run( product ) {
	let primes = factor(product);
	return Math.max(...primes);
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

if (argv.product) {
	console.log(run(argv.product));
}

export { run }