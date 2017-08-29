import { assertResult } from "../helpers"
import { isPalendrome, findLargestPalindrome } from '../exercises/problem-4'

assertResult(isPalendrome, [123321], true);
assertResult(isPalendrome, [123456], false);
assertResult(findLargestPalindrome, [2], 9009);
assertResult(findLargestPalindrome, [3], 906609);