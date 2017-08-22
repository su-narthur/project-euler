import { run } from '../src/hello-world'

QUnit.test( "hello test", function( assert ) {
	let result = run();
	assert.ok( 1 == "1", "Passed!" );
	assert.equal(result,"Hello World");
});