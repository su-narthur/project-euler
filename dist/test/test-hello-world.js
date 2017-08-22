"use strict";

var _helloWorld = require("../src/hello-world");

QUnit.test("hello test", function (assert) {
	var result = (0, _helloWorld.run)();
	assert.ok(1 == "1", "Passed!");
	assert.equal(result, "Hello World");
});
//# sourceMappingURL=test-hello-world.js.map