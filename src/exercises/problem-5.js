function isDivisibleByIntegersUpTo(highestDiviser, target) {
	if ( highestDiviser < 2 ) return true;

	if ( target % highestDiviser === 0 ) return isDivisibleByIntegersUpTo( highestDiviser - 1, target );

	return false;
}

export { isDivisibleByIntegersUpTo }