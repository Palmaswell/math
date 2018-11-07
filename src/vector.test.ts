import Vector from './vector';

const vector1 = Vector([8.218, -9.341]);
const vector2 = Vector([7.119, 8.215]);
const vector3 = Vector([1.671, -1.012, -0.318]);
test('Vector operations', () => {
    expect(vector1.coordinates).toEqual([8.218, -9.341]);
    expect(vector1.plus([-1.129, 2.111])).toEqual([7.089, -7.229999999999999,]);
    expect(vector2.minus([-8.223, 0.878])).toEqual([15.342, 7.337]);
    expect(vector3.scalar(7.41)).toEqual([12.38211, -7.49892, -2.35638]);
});


