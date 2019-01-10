// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Vector$LinearAlgebraRe = require("../src/Vector.js");

describe("add", (function () {
        Jest.test("basic floats", (function (param) {
                return Jest.Expect[/* toEqual */12](/* :: */[
                            5.9,
                            /* :: */[
                              11.2,
                              /* :: */[
                                13.6,
                                /* [] */0
                              ]
                            ]
                          ], Jest.Expect[/* expect */0](Vector$LinearAlgebraRe.add(undefined, /* :: */[
                                    2.2,
                                    /* :: */[
                                      4.3,
                                      /* :: */[
                                        5.5,
                                        /* [] */0
                                      ]
                                    ]
                                  ], /* :: */[
                                    3.7,
                                    /* :: */[
                                      6.9,
                                      /* :: */[
                                        8.1,
                                        /* [] */0
                                      ]
                                    ]
                                  ])));
              }));
        return Jest.test("floats", (function (param) {
                      return Jest.Expect[/* toEqual */12](/* :: */[
                                  7.089,
                                  /* :: */[
                                    -7.229999999999999,
                                    /* [] */0
                                  ]
                                ], Jest.Expect[/* expect */0](Vector$LinearAlgebraRe.add(undefined, /* :: */[
                                          8.218,
                                          /* :: */[
                                            -9.341,
                                            /* [] */0
                                          ]
                                        ], /* :: */[
                                          -1.129,
                                          /* :: */[
                                            2.111,
                                            /* [] */0
                                          ]
                                        ])));
                    }));
      }));

describe("substract", (function () {
        Jest.test("basic floats", (function (param) {
                return Jest.Expect[/* toEqual */12](/* :: */[
                            3.3,
                            /* :: */[
                              6.0,
                              /* :: */[
                                -5.7,
                                /* [] */0
                              ]
                            ]
                          ], Jest.Expect[/* expect */0](Vector$LinearAlgebraRe.substract(undefined, /* :: */[
                                    -2.0,
                                    /* :: */[
                                      3.0,
                                      /* :: */[
                                        0.0,
                                        /* [] */0
                                      ]
                                    ]
                                  ], /* :: */[
                                    -5.3,
                                    /* :: */[
                                      -3.0,
                                      /* :: */[
                                        5.7,
                                        /* [] */0
                                      ]
                                    ]
                                  ])));
              }));
        return Jest.test("floats", (function (param) {
                      return Jest.Expect[/* toEqual */12](/* :: */[
                                  15.342,
                                  /* :: */[
                                    7.337,
                                    /* [] */0
                                  ]
                                ], Jest.Expect[/* expect */0](Vector$LinearAlgebraRe.substract(undefined, /* :: */[
                                          7.119,
                                          /* :: */[
                                            8.215,
                                            /* [] */0
                                          ]
                                        ], /* :: */[
                                          -8.223,
                                          /* :: */[
                                            0.878,
                                            /* [] */0
                                          ]
                                        ])));
                    }));
      }));

describe("scale", (function () {
        return Jest.test("floats", (function (param) {
                      return Jest.Expect[/* toEqual */12](/* :: */[
                                  12.38211,
                                  /* :: */[
                                    -7.49892,
                                    /* :: */[
                                      -2.35638,
                                      /* [] */0
                                    ]
                                  ]
                                ], Jest.Expect[/* expect */0](Vector$LinearAlgebraRe.scale(7.41, /* :: */[
                                          1.671,
                                          /* :: */[
                                            -1.012,
                                            /* :: */[
                                              -0.318,
                                              /* [] */0
                                            ]
                                          ]
                                        ])));
                    }));
      }));

describe("magnitude", (function () {
        Jest.test("2 entry vector", (function (param) {
                return Jest.Expect[/* toEqual */12](7.4402829247280655, Jest.Expect[/* expect */0](Vector$LinearAlgebraRe.magnitude(/* :: */[
                                    -0.221,
                                    /* :: */[
                                      7.437,
                                      /* [] */0
                                    ]
                                  ])));
              }));
        Jest.test("3 entry vector", (function (param) {
                return Jest.Expect[/* toEqual */12](9.633842950764768, Jest.Expect[/* expect */0](Vector$LinearAlgebraRe.magnitude(/* :: */[
                                    -4.587,
                                    /* :: */[
                                      0.685,
                                      /* :: */[
                                        8.444,
                                        /* [] */0
                                      ]
                                    ]
                                  ])));
              }));
        return Jest.test("3 entry vector", (function (param) {
                      return Jest.Expect[/* toEqual */12](10.884187567292287, Jest.Expect[/* expect */0](Vector$LinearAlgebraRe.magnitude(/* :: */[
                                          8.813,
                                          /* :: */[
                                            -1.331,
                                            /* :: */[
                                              -6.247,
                                              /* [] */0
                                            ]
                                          ]
                                        ])));
                    }));
      }));

describe("direction", (function () {
        Jest.test("2 entry vector", (function (param) {
                return Jest.Expect[/* toEqual */12](/* :: */[
                            0.934,
                            /* :: */[
                              -0.357,
                              /* [] */0
                            ]
                          ], Jest.Expect[/* expect */0](Vector$LinearAlgebraRe.direction(/* :: */[
                                    5.581,
                                    /* :: */[
                                      -2.136,
                                      /* [] */0
                                    ]
                                  ])));
              }));
        return Jest.test("3 entry vector", (function (param) {
                      return Jest.Expect[/* toEqual */12](/* :: */[
                                  0.340,
                                  /* :: */[
                                    0.530,
                                    /* :: */[
                                      -0.777,
                                      /* [] */0
                                    ]
                                  ]
                                ], Jest.Expect[/* expect */0](Vector$LinearAlgebraRe.direction(/* :: */[
                                          1.996,
                                          /* :: */[
                                            3.108,
                                            /* :: */[
                                              -4.554,
                                              /* [] */0
                                            ]
                                          ]
                                        ])));
                    }));
      }));

/*  Not a pure module */
