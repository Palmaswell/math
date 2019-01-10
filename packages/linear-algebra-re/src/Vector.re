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
  | [entry, ...t] => [1.00 /. magnitude(v) *. entry, ...direction(t)]
}
