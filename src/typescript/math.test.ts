import * as Math from './math';

test('Square Root Bisection method', () => {
  expect(Math.bisection({
    f: Math.f(10),
    a: -2,
    b: 5
  })).toEqual(3.162277660168379);
  expect(Math.bisection({
    f: Math.f(9),
    a: -2,
    b: 6
  })).toEqual(3);
  expect(Math.bisection({
    f: Math.f(16),
    a: -2,
    b: 6
  })).toEqual(4);
});

