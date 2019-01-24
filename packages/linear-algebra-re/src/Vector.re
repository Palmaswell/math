open Math;
open Root;
type angleUnit =
  | Radians
  | Degrees;
/**
 * @name add
 * @type { array }
 * @description two vectors of the same length can be added together
 * by adding the corresponding entries to form another vector of
 * the same size.
 */
let rec add = (~i=0, v1, v2) =>
    switch v1 {
    | [] => []
    | [h, ...t] => [h +. List.nth(v2, i), ...add(~i=i + 1, t, v2)]
    };

/**
 * @name substract
 * @type { array }
 * @description two vectors of the same length can be substracted together
 * by adding the corresponding entries to form another vector of
 * the same size.
 */
let rec substract = (~i=0, v1, v2) =>
    switch v1 {
    | [] => []
    | [h, ...t] => [h -. List.nth(v2, i), ...substract(~i = i + 1, t, v2)]
    };

/**
 * @name scalar
 * @type { array }
 * @description scalar multiplication or scalar vector multiplication,
 * is an operation in which a vector is multiplied by a scalar(number),
 * which is done by multiplying every entry of the vector by the scalar
 */
let rec scalar = (n, v) =>
  switch v {
  | [] => []
  | [h, ...t] => [h *. n, ...scalar(n, t)]
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

let angle = (angleUnit, v1, v2) =>
  switch angleUnit {
  | Radians => acos(dot_product(v1, v2) /. (magnitude(v1) *. magnitude(v2)))
  | Degrees => rad_to_deg(acos(dot_product(v1, v2) /. (magnitude(v1) *. magnitude(v2))))
  };

/**
 * @name is_orthogonal
 * @type { boolean }
 * @description Two vectors are orthogonal if their dot product is 0
 * (A 90 degree angle between two vectors)
 * The 0 vector is parallel and orthogonal to all vectors.
 * The 0 vector is the only vector that is orthogonal to itself.
 * w * v = 0
*/

let is_orthogonal = (v1, v2) => float_abs(dot_product(v1, v2)) < 1e-10;

/**
 * @name is_zero
 * @type { boolean }
 * @description A zero vector is a vector that all
 * elements equal to zero. The zero vector has a length of 0
 *
*/
let is_zero = v1 => magnitude(v1) < 1e-10;

/**
 * @name is_parallel
 * @type { boolean }
 * @description Two vectors are parallel if one is a
 * scalar multiple of the other.
 * Consider two vector to be parallel even if they point
 * in opposite directions.
 *
*/
[@bs.val] external pi : float = "Math.PI";
let is_parallel = (v1, v2) => is_zero(v1)
  || is_zero(v2)
  || angle(Degrees, v1, v2) == 0.00
  || angle(Degrees, v1, v2) == rad_to_deg(pi);
