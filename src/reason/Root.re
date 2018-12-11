open Math;
let f = (n, x) => (x *. x) -. n;

let bisection = (f, ~a, ~b,) => {
  let i = ref(0);
  let x = ref(a);
  let y = ref(b);
  let c = ref(a +. b /. 2.00);
  let tol = 1e-2;
  /* let n_max = 1000; */
  if (f(c) === 0.00 || (b -. a) /. 2.00 < tol) {
    c;
  }
  else {
  if (float_sign(f(x)) !== float_sign(f(c))) {
    1.00;
  } else {
    3.00;
  }
}
};

