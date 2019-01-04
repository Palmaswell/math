
/**
 * Bisection method
 * Root finding proplem `f(x) = 0`
 * @param f a continuous function.
 * @param a interval |a, b|
 * @param b interval |a, b|
 */

export interface BisectionProps {
  f: (n: number) => number;
  low: number;
  high: number;
  i?: number;
}
export const f = (value: number) => (n: number) => n * n - value;

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
