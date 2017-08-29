import { assertResult } from "../helpers"
import { isDivisibleByIntegersUpTo } from '../exercises/problem-5'

assertResult( isDivisibleByIntegersUpTo, [10, 2520], true );
assertResult( isDivisibleByIntegersUpTo, [10, 10], false );