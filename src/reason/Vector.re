open List;


/* vector_add: (list(float),  list(float)) => list(float) */
let rec vector_add = (~i=0, l1, l2) => 
    switch l1 {
    | [] => []
    | [h, ...t] => [h +. List.nth(l2, i), ...vector_add(~i=i + 1, t, l2)]
    };

/* vector_substract: (list(float), list(float) => list(float) ) */
let rec vector_substract = (~i=0, l1, l2) => 
    switch l1 {
    | [] => []
    | [h, ...t] => [h -. List.nth(l2, i), ...vector_substract(~i = i + 1, t, l2)]
    };

/* (list('a)) => list('a) */
let rec add_one = l => 
    switch l {
    | [] => []
    | [h, ...t] => [h + 1, ...add_one(t)]
    };


