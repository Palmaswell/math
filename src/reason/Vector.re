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
let rec scale = (~i=0, n, v) =>
    switch v {
    | [] => []
    | [h, ...t] => [h *. n, ...scale(~i = i + 1, n, t)]
    };

/* (list(float)) => float */
