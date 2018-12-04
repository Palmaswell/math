
export const f = (n: number) => (x: number) => x * x - n;
/**
 * Bisection method
 * Root finding proplem `f(x) = 0`
 * @param n root number to find.
 * @param f a continuous function.
 * @param a interval |a, b|
 * @param b interval |a, b|
 */
export interface BisectionProps {
  f: (n: number) => number;
  a: number;
  b: number;

}
export const bisection = ({ f, a, b }: BisectionProps): number => {
  let i = 0;
  let c =  (a + b) / 2;
  const TOL = 1e-2;
  const NMAX = 1000;

  if (f(c) === 0 || (b - a) / 2 < TOL) {
    return c;
  };

  while( Math.abs(f(c)) && i <= NMAX ) {
    if (Math.sign(f(a)) !== Math.sign(f(c))) {
      b = c;
    } else if (Math.sign(f(b)) !== Math.sign(f(c))) {
      a = c;
    }
    c = (a + b) / 2;
    i++;
  }
  return c;
}
