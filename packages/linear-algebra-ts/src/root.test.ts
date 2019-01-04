import * as Math from './root';

test('Square Root Bisection method', () => {
  expect(Math.bisection({
    f: Math.f(10),
    low: -2,
    high: 5
  })).toEqual(3.162278);
  expect(Math.bisection({
    f: Math.f(9),
    low: -2,
    high: 6
  })).toEqual(3);
  expect(Math.bisection({
    f: Math.f(16),
    low: -2,
    high: 6
  })).toEqual(4);
  expect(Math.bisection({
    f: Math.f(11),
    low: -2,
    high: 5
  })).toEqual(3.316625);
});

