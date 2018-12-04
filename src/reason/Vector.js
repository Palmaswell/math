// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");

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

function magnitude(l) {
  if (l) {
    var h = l[0];
    return h * h + magnitude(l[1]);
  } else {
    return 0.0;
  }
}

exports.add = add;
exports.substract = substract;
exports.scale = scale;
exports.magnitude = magnitude;
/* No side effect */
