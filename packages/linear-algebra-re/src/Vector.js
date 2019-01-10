// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Root$LinearAlgebraRe = require("./Root.js");

function add($staropt$star, v1, v2) {
  var i = $staropt$star !== undefined ? $staropt$star : 0;
  if (v1) {
    return /* :: */[
            v1[0] + List.nth(v2, i),
            add(i + 1 | 0, v1[1], v2)
          ];
  } else {
    return /* [] */0;
  }
}

function substract($staropt$star, v1, v2) {
  var i = $staropt$star !== undefined ? $staropt$star : 0;
  if (v1) {
    return /* :: */[
            v1[0] - List.nth(v2, i),
            substract(i + 1 | 0, v1[1], v2)
          ];
  } else {
    return /* [] */0;
  }
}

function scale(n, v) {
  if (v) {
    return /* :: */[
            v[0] * n,
            scale(n, v[1])
          ];
  } else {
    return /* [] */0;
  }
}

function magnitude(v) {
  var aux = function (v) {
    if (v) {
      var entry = v[0];
      return entry * entry + aux(v[1]);
    } else {
      return 0.00;
    }
  };
  return Root$LinearAlgebraRe.float_sqroot(aux(v));
}

function direction(v) {
  if (v) {
    return /* :: */[
            1.00 / magnitude(v) * v[0],
            direction(v[1])
          ];
  } else {
    return /* [] */0;
  }
}

exports.add = add;
exports.substract = substract;
exports.scale = scale;
exports.magnitude = magnitude;
exports.direction = direction;
/* No side effect */