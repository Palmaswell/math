open List;


/* vector_add: (list(float),  list(float)) => list(float) */
let rec vector_add = (~i=0, v1, v2) => 
    switch v1 {
    | [] => []
    | [h, ...t] => [h +. List.nth(v2, i), ...vector_add(~i=i + 1, t, v2)]
    };

/* vector_substract: (list(float), list(float) => list(float) ) */
let rec vector_substract = (~i=0, v1, v2) => 
    switch v1 {
    | [] => []
    | [h, ...t] => [h -. List.nth(v2, i), ...vector_substract(~i = i + 1, t, v2)]
    };

/* vector_scale: (float, list(float)) => list(float) */
let rec vector_scale = (~i=0, n, v) => 
    switch v {
    | [] => []
    | [h, ...t] => [h *. n, ...vector_scale(~i = i + 1, n, t)]
    };

/* (list('a)) => list('a) */
let rec add_one = l => 
    switch l {
    | [] => []
    | [h, ...t] => [h + 1, ...add_one(t)]
    };


