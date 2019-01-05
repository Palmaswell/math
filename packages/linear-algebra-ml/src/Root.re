open Math;
/**
 * Bisection method
 * Root finding proplem `f(x) = 0`
 * @param f a continuous function.
 * @param a interval |a, b|
 * @param b interval |a, b|
 */
let f = (v, n) => (n *. n) -. v;

let rec bisection = (~i=0, f, l, h) => {
  let t = 1e-15;
  let m = (l +. h) /. 2.00;
  if (f(m) == 0.00 || (h -. l) /. 2.00 < t) {
    m;
  }
  else {
    if (float_sign(f(l)) != float_sign(f(m))) {
      bisection(~i=i+1, f, l, m);
    }
    else if(float_sign(f(h)) != float_sign(f(m))) {
      bisection(~i=i+1, f, m, h);
    }
    else {
      m;
    }
  }
}
