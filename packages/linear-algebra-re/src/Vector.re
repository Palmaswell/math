open Math;
open Root;
/* add: (list(float),  list(float)) => list(float) */
let rec add = (~i=0, v1, v2) =>
    switch v1 {
    | [] => []
    | [h, ...t] => [h +. List.nth(v2, i), ...add(~i=i + 1, t, v2)]
    };

/* substract: (list(float), list(float) => list(float) ) */
let rec substract = (~i=0, v1, v2) =>
    switch v1 {
    | [] => []
    | [h, ...t] => [h -. List.nth(v2, i), ...substract(~i = i + 1, t, v2)]
    };

/* scale: (float, list(float)) => list(float) */
let rec scale = (n, v) =>
  switch v {
  | [] => []
  | [h, ...t] => [h *. n, ...scale(n, t)]
  };

/**
 *
 * @name magnitude
 * @type { number }
 * @description The magnitude of a vector refers
 * to how much movement a vector quantifies. Or
 * the distance between the two points it connects.
 * ||v|| = √(entry1)² + (entry2)² + ... + (entryN)²
 */
let magnitude = v => {
  let rec aux = v =>
    switch v {
    | [] => 0.00
    | [entry, ...t] => entry *. entry +. aux(t)
  };
  float_sqroot(aux(v));
};


/**
 *
 * @name directon
 * @type { Array }
 * @description refers to where the director's movement is pointing.
 * A unit vector is a vector whose magnitude is 1
 * 1 / ||v|| * v = u
 */
let rec direction = v =>
  switch v {
    | [] => []
    | [entry, ...t] => [1.00 /. magnitude(v) *. (entry), ...direction(t)]
  };


/**
 *
 * @name dotProduct
 * @type { number }
 * @description calculates the inner product of
 * two vectors of the same length.
 * Basically we can multiply the corresponding components
 * and add those products together.
 * v * w  = v1 w1 + v2 w2 + v3 w3 + .... + vn wn
 */
let rec dot_product = (~i=0, v1, v2) =>
  switch v1 {
    | [] => 0.00
    | [entry, ...t] => entry *. List.nth(v2, i) +. dot_product(~i=i+1, t, v2)
  };

/**
 * @name angle
 * @type { number }
 * @description the angle betwenn two vectors:
 * which is the inner product divided by the maginitude of
 * both vectors.
 * arccos(v * w / ||v|| * ||w||)
 */
type angleType =
  | Radians
  | Degrees;

let angle = (angleType, v1, v2) =>
  switch angleType {
  | Radians => acos(dot_product(v1, v2) /. (magnitude(v1) *. magnitude(v2)))
  | Degrees => rad_to_deg(acos(dot_product(v1, v2) /. (magnitude(v1) *. magnitude(v2))))
  };



