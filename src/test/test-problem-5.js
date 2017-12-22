import { assertResult } from "../helpers"
import { isDivisibleByIntegersUpTo, findSmallestNumberDivisibleByIntegersUpTo, primeApproach } from '../exercises/problem-5'

assertResult( isDivisibleByIntegersUpTo, [10, 2520], true );
assertResult( isDivisibleByIntegersUpTo, [10, 10], false );
assertResult( findSmallestNumberDivisibleByIntegersUpTo, [10], 2520 );
assertResult( findSmallestNumberDivisibleByIntegersUpTo, [20], 232792560 );
assertResult( primeApproach, [10], 2520 );