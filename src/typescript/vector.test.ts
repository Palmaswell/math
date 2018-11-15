import Vector from './vector';


test('Addition', () => {
    expect(Vector.add([8.218, -9.341], [-1.129, 2.111])).toEqual([7.089, -7.229999999999999]);
    expect(Vector.add([2.2, 4.3, 5.5], [3.7, 6.9, 8.1])).toEqual([5.9, 11.2, 13.6]);
})

test('Substraction', () => {
    expect(Vector.substract([-2.0, 3.0, 0.0], [-5.3, -3.0, 5.7])).toEqual([3.3, 6.0, -5.7]);
    expect(Vector.substract([7.119, 8.215], [-8.223, 0.878])).toEqual([15.342, 7.337]);
})
