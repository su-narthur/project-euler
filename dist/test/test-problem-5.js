"use strict";

var _helpers = require("../helpers");

var _problem = require("../exercises/problem-5");

(0, _helpers.assertResult)(_problem.isDivisibleByIntegersUpTo, [10, 2520], true);
(0, _helpers.assertResult)(_problem.isDivisibleByIntegersUpTo, [10, 10], false);
(0, _helpers.assertResult)(_problem.findSmallestNumberDivisibleByIntegersUpTo, [10], 2520);
(0, _helpers.assertResult)(_problem.findSmallestNumberDivisibleByIntegersUpTo, [20], 232792560);
(0, _helpers.assertResult)(_problem.primeApproach, [10], 2520);
//# sourceMappingURL=test-problem-5.js.map