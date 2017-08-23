import { run } from '../exercises/hello-world'

QUnit.test( "Test outputs 'Hello World'", function( assert ) {
	let result = run();
	assert.equal( result, "Hello World" );
});