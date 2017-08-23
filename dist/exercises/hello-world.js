#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});


var argv = require('yargs').argv;

function run() {
	return "Hello World";
}

if (argv.$0.includes("hello-world.js")) {
	console.log(run());
}

exports.run = run;
//# sourceMappingURL=hello-world.js.map