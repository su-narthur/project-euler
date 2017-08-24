#!/usr/bin/env node

const argv = require('yargs').argv;

function run(limit) {
	return step( limit, 0, 0 );
}

function step( limit, i, carry ) {
	let newCarry = carry + ((i % 3 === 0 || i % 5 === 0) ? i : 0);
	return (i < limit) ? step( limit, i+1, newCarry ) : carry;
}

if (argv.limit) {
	console.log(run(argv.limit));
}

export { run }