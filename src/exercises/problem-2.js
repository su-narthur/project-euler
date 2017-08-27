#!/usr/bin/env node

const argv = require('yargs').argv;

function run( limit ) {
	let sequence = buildFibSequence( limit );
	return sequence.reduce(function(sum, value) {
		return sum + ((value % 2 === 0) ? value : 0);
	}, 0);
}

function buildFibSequence( limit, carry=[1,2] ) {
	let nextTerm = (carry[carry.length-1]||0) + (carry[carry.length-2]||0);
	return (nextTerm > limit) ? carry : buildFibSequence( limit, [...carry, nextTerm] );
}

if (argv.limit) {
	console.log(run(argv.limit));
}

export { run }