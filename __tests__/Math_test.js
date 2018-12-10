// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Math$AppliedLinearAlgebra = require("../src/reason/Math.js");

describe("Math absolute value from floating number utility", (function () {
        Jest.test("positive number", (function (param) {
                return Jest.Expect[/* toEqual */12](10.00, Jest.Expect[/* expect */0](Math$AppliedLinearAlgebra.float_abs(10.00)));
              }));
        Jest.test("negative number", (function (param) {
                return Jest.Expect[/* toEqual */12](10.00, Jest.Expect[/* expect */0](Math$AppliedLinearAlgebra.float_abs(-10.00)));
              }));
        Jest.test("negative number", (function (param) {
                return Jest.Expect[/* toEqual */12](1.85, Jest.Expect[/* expect */0](Math$AppliedLinearAlgebra.float_abs(-1.85)));
              }));
        return Jest.test("positive number", (function (param) {
                      return Jest.Expect[/* toEqual */12](12.33, Jest.Expect[/* expect */0](Math$AppliedLinearAlgebra.float_abs(12.33)));
                    }));
      }));

/*  Not a pure module */