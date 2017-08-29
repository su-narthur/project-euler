function assertResult(func, input, output) {
	QUnit.test( input.toString() + " >> " + output.toString(), function( assert ) {
		let t0 = Date.now();
		let result = func(...input);
		let t1 = Date.now();
		console.log('');
		console.log("in " + (t1 - t0) + " milliseconds");
		assert.equal(result, output, "Expected " + output + ", got " + result);
	});
}

function trampoline(f) {
	while (f && f instanceof Function) {
		f = f();
	}
	return f;
}

export { assertResult, trampoline }