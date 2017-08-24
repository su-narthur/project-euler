"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function assertResult(func, input, output) {
	QUnit.test(input.toString() + " = " + output.toString(), function (assert) {
		var t0 = Date.now();
		var result = func(input);
		var t1 = Date.now();
		console.log('');
		console.log("in " + (t1 - t0) + " milliseconds");
		assert.equal(result, output);
	});
}

exports.assertResult = assertResult;
//# sourceMappingURL=helpers.js.map