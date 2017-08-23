"use strict";

var _helloWorld = require("../exercises/hello-world");

QUnit.test("Test outputs 'Hello World'", function (assert) {
	var result = (0, _helloWorld.run)();
	assert.equal(result, "Hello World");
});
//# sourceMappingURL=test-hello-world.js.map