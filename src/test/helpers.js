function assertResult(func, input, output) {
	QUnit.test( input.toString() + " >> " + output.toString(), function( assert ) {
		let t0 = Date.now();
		let result = func(input);
		let t1 = Date.now();
		console.log('');
		console.log("in " + (t1 - t0) + " milliseconds");
		assert.equal(result, output, "Expected " + output + ", got " + result);
	});
}

export { assertResult }