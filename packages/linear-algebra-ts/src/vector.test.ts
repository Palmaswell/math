import * as Vector from './vector';


test('Addition', () => {
    expect(Vector.add([8.218, -9.341], [-1.129, 2.111])).toEqual([7.089, -7.229999999999999]);
    expect(Vector.add([2.2, 4.3, 5.5], [3.7, 6.9, 8.1])).toEqual([5.9, 11.2, 13.6]);
});

test('Substraction', () => {
    expect(Vector.substract([-2.0, 3.0, 0.0], [-5.3, -3.0, 5.7])).toEqual([3.3, 6.0, -5.7]);
    expect(Vector.substract([7.119, 8.215], [-8.223, 0.878])).toEqual([15.342, 7.337]);
});

test('Scalar multiplication', () => {
    expect(Vector.scalar(7.41, [1.671, -1.012, -0.318])).toEqual([12.38211, -7.49892, -2.35638]);
});

test('Magnitude', () => {
  expect(Vector.magnitude([-0.221, 7.437])).toEqual(7.440282924728065);
  expect(Vector.magnitude([-4.587, 0.685, 8.444])).toEqual(9.633842950764768);
  expect(Vector.magnitude([8.813, -1.331, -6.247])).toEqual(10.884187567292289);
});

test('Direction', () => {
  expect(Vector.direction([5.581, -2.136])).toEqual([0.934, -0.357]);
  expect(Vector.direction([1.996, 3.108, -4.554])).toEqual([0.340, 0.530, -0.777]);
})

test('Dot product', () => {
  expect(Vector.dotProduct([7.887, 4.138], [-8.802, 6.776])).toEqual(-41.382286);
  expect(Vector.dotProduct([-5.955, -4.904, -1.874], [-4.496, -8.755, 7.103])).toEqual(56.397178000000004);
});

test('Vector angle', () => {
  expect(Vector.angle([3.183, -7.627], [-2.668, 5.319])).toEqual(3.0720263098372476);
  expect(Vector.angle([7.35, 0.221, 5.188], [2.751, 8.259, 3.985], Vector.Unit.degrees)).toEqual(60.27581120523091);
});

test('Check if two vectors are orthogonal to each other', () => {
  expect(Vector.isOrthogonal([-7.579, -7.88], [22.737, 23.64])).toEqual(false);
  expect(Vector.isOrthogonal([-2.029, 9.97, 4.172], [-9.231, -6.639, -7.245])).toEqual(false);
  expect(Vector.isOrthogonal([-2.328, -7.284, -1.214], [-1.821, 1.072, -2.94])).toEqual(true);
  expect(Vector.isOrthogonal([2.118, 4.827], [0, 0])).toEqual(true);
});

test('Check if a vector is a zero vector', () => {
  expect(Vector.isZero([-7.579, -7.88])).toEqual(false);
  expect(Vector.isZero([-2.029, 9.97, 4.172])).toEqual(false);
  expect(Vector.isZero([-2.328, -7.284, -1.214])).toEqual(false);
  expect(Vector.isZero([0, 0])).toEqual(true);
})

// test('Check if two vectors are parallel to each other', () => {
//   expect(Vector.isParallel([-7.579, -7.88], [22.737, 23.64])).toEqual(true);
//   expect(Vector.isParallel([-2.029, 9.97, 4.172], [-9.231, -6.639, -7.245])).toEqual(false);
//   expect(Vector.isParallel([-2.328, -7.284, -1.214], [-1.821, 1.072, -2.94])).toEqual(false);
//   expect(Vector.isParallel([2.118, 4.827], [0, 0])).toEqual(false);
// })


