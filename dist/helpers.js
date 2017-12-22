"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function assertResult(func, input, output) {
	QUnit.test(input.toString() + " >> " + output.toString(), function (assert) {
		var t0 = Date.now();
		var result = func.apply(undefined, _toConsumableArray(input));
		var t1 = Date.now();
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

exports.assertResult = assertResult;
exports.trampoline = trampoline;
//# sourceMappingURL=helpers.js.map