import * as Math from './root';

test('Bisection method', () => {
  expect(Math.bisection({
    f: Math.intermediateZero(10),
    low: -2,
    high: 5
  })).toEqual(3.162278);
  expect(Math.bisection({
    f: Math.intermediateZero(9),
    low: -2,
    high: 6
  })).toEqual(3);
  expect(Math.bisection({
    f: Math.intermediateZero(16),
    low: -2,
    high: 6
  })).toEqual(4);
  expect(Math.bisection({
    f: Math.intermediateZero(11),
    low: -2,
    high: 5
  })).toEqual(3.316625);
});

test('Square Root Function', () => {
  expect(Math.sqroot(9)).toEqual(3);
  expect(Math.sqroot(11)).toEqual(3.316625);
  expect(Math.sqroot(-4.587 * -4.587)).toEqual(4.587);
  expect(Math.sqroot(0.685 * 0.685)).toEqual(0.685);
  expect(Math.sqroot(8.444 * 8.444)).toEqual(8.444);
})
