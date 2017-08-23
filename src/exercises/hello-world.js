#!/usr/bin/env node

const argv = require('yargs').argv;

function run() {
	return "Hello World";
}

if (argv.$0.includes("hello-world.js")) {
	console.log(run());
}

export { run }