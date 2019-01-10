// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Math$LinearAlgebraRe = require("./Math.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function bisection(_$staropt$star, f, _l, _h) {
  while(true) {
    var h = _h;
    var l = _l;
    var $staropt$star = _$staropt$star;
    var i = $staropt$star !== undefined ? $staropt$star : 0;
    var m = (l + h) / 2.00;
    if (Curry._1(f, m) === 0.00 || (h - l) / 2.00 < 1e-15) {
      return m;
    } else if (Math$LinearAlgebraRe.float_sign(Curry._1(f, l)) !== Math$LinearAlgebraRe.float_sign(Curry._1(f, m))) {
      _h = m;
      _$staropt$star = i + 1 | 0;
      continue ;
    } else if (Math$LinearAlgebraRe.float_sign(Curry._1(f, h)) !== Math$LinearAlgebraRe.float_sign(Curry._1(f, m))) {
      _l = m;
      _$staropt$star = i + 1 | 0;
      continue ;
    } else {
      return m;
    }
  };
}

function intermediate_zero(x, n) {
  return n * n - x;
}

function float_sqroot(x) {
  if (x < 0.0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Negative number are not allowed"
        ];
  }
  if (x === 0.00) {
    return 0.00;
  } else {
    var match = x < 1.00;
    return bisection(undefined, (function (param) {
                  return intermediate_zero(x, param);
                }), 0.00, match ? 1.00 : x);
  }
}

exports.bisection = bisection;
exports.intermediate_zero = intermediate_zero;
exports.float_sqroot = float_sqroot;
/* No side effect */
