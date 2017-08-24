#!/usr/bin/env node

const argv = require('yargs').argv;

function run(limit) {
	return [...new Array(limit).keys()].reduce(function(sum, i) {
		return sum + ((i % 3 === 0 || i % 5 === 0) ? i : 0);
	}, 0);
}

if (argv.limit) {
	console.log(run(argv.limit));
}

export { run }