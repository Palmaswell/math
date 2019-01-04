import * as Utils from './utils';

test('Radians to degrees', () => {
  expect(Utils.radToDeg(150)).toEqual(8594.366926962348);
  expect(Utils.radToDeg(-45)).toEqual(-2578.3100780887044);
});
