open Math;
/**
 * @name Bisection method
 * @description Finding the root of an equation `f(x) = 0`
 * Find the root of a number. Which is our equation `x² = n`
 * @param f a continuous function `f(x) = 0`.
 * @param l braket interval |l, h|
 * @param h braket interval |l, h|
 */
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
};

/**
 * @name The Intermediate Zero Theorem
 * @description Let f(x) be a function which is continuous
 * on the closed interval [a,b]. If f(a) and f(b) have
 * opposite signs or that one is zero. `f(a)f(b) <= 0`
 * Then there is at least one c with `a < c < b` such that f(c) = 0.
 * In this case the equation is looking for the root of a number.
 */
let intermediate_zero = (x, n) => (n *. n) -. x;

/**
 * @name sqroot
 * @description Returns an implementation-dependent approximation
 */
let float_sqroot = x => {
  if (x < 0.0) {
    raise(Invalid_argument("Negative number are not allowed"))
  }
  if (x === 0.00) {
    0.00
  }
  else {
    bisection(
      intermediate_zero(x),
      0.00,
      x < 1.00 ? 1.00 : x
    )
  }
};
