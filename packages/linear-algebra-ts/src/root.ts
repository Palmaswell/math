/**
 * @name Bisection method
 * @description Finding the root of an equation `f(x) = 0`
 * Find the root of a number. Which is our equation `x² = n`
 * @param f a continuous function `f(x) = 0`.
 * @param low  braket interval |low, high|
 * @param high braket interval |low, high|
 */

export interface BisectionProps {
  f: (n: number) => number;
  low: number;
  high: number;
  i?: number;
}

export const bisection = ({f, low, high, i = 0}: BisectionProps): number => {
  const tol = 1e-15;
  const mid = (low + high) / 2;

  if (f(mid) === 0 || (high - low) / 2 < tol) {
    return +mid.toFixed(6);
  }
  if (Math.abs(f(mid)) && i <= 1000) {
    if(Math.sign(f(low)) !== Math.sign(f(mid))) {
      return bisection({
        f,
        low,
        high: mid,
        i: i + 1
      })
    }
    else if (Math.sign(f(high)) !== Math.sign(f(mid))) {
      return bisection({
        f,
        low: mid,
        high,
        i: i + 1
      })
    }
    return +mid.toFixed(6);
  }
}

/**
 * @name The Intermediate Zero Theorem
 * @description Let f(x) be a function which is continuous
 * on the closed interval [a,b]. If f(a) and f(b) have
 * opposite signs or that one is zero. `f(a)f(b) <= 0`
 * Then there is at least one c with `a < c < b` such that f(c) = 0.
 */
export const intermediateZero = (value: number) => (n: number) => n ** 2 - value;

/**
 * @name sqroot
 * @description Returns an implementation-dependent approximation
 */
export const sqroot = (x: number): number => {
  if(Number.isNaN(x)) {
    return NaN;
  }
  if(x < 0) {
    return NaN;
  }
  if(x === 0) {
    return 0;
  }
  return bisection({
    f: intermediateZero(x),
    low: 0,
    high: x < 1 ? 1 : x
  });
};

/**
 * Newton-Raphson method
 * @description Root finding proplem `f(x) = 0`
 * Initial approximation guess `x0`
 */
