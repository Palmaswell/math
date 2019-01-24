open Jest;

open Expect;
open Vector;


describe("add", () => {
  test("basic floats", () => expect(add([2.2, 4.3, 5.5], [3.7, 6.9, 8.1])) |> toEqual([5.9, 11.2, 13.6]));
  test("floats", () => expect(add([8.218, -9.341], [-1.129, 2.111])) |> toEqual([7.089, -7.229999999999999]));
});

describe("substract", () => {
  test("basic floats", () => expect(substract([-2.0, 3.0, 0.0], [-5.3, -3.0, 5.7])) |> toEqual([3.3, 6.0, -5.7]));
  test("floats", () => expect(substract([7.119, 8.215], [-8.223, 0.878])) |> toEqual([15.342, 7.337]));
});

describe("scale", () => {
  test("floats", () => expect(scale(7.41, [1.671, -1.012, -0.318])) |> toEqual([12.38211, -7.49892, -2.35638]));
});

describe("magnitude", () => {
  test("test direction vector", () => expect(magnitude([5.581, -2.136])) |> toEqual(5.975789236577877))
  test("2 entry vector", () => expect(magnitude([-0.221, 7.437])) |> toEqual(7.4402829247280655))
  test("3 entry vector", () => expect(magnitude([-4.587, 0.685, 8.444])) |> toEqual(9.633842950764768))
  test("3 entry vector", () => expect(magnitude([8.813, -1.331, -6.247])) |> toEqual(10.884187567292287))
});

/* describe("direction", () => {
  test("2 entry vector", () => expect(direction([5.581, -2.136])) |> toEqual([0.9339352140866403, -0.35744232526233]))
  test("3 entry vector", () => expect(direction([1.996, 3.108, -4.554])) |> toEqual([0.340, 0.530, -0.777]))
}); */

describe("Dot Product", () => {
  test("two entries vector", () =>
    expect(
      dot_product([7.887, 4.138], [-8.802, 6.776])
    ) |> toEqual(-41.382286)
  )
  test("three entries vector", () => expect(dot_product([-5.955, -4.904, -1.874], [-4.496, -8.755, 7.103])) |> toEqual(56.39717800000001))
});

describe("Angle between two vectors", () => {
  test("radian angle", () => expect(angle(Radians, [3.183, -7.627], [-2.668, 5.319])) |> toEqual(3.0720263098372476))
  test("degree angle", () => expect(angle(Degrees, [7.35, 0.221, 5.188], [2.751, 8.259, 3.985])) |> toEqual(60.27581120523091))
});

describe("Check if two vectors are orthogonal to each other", () => {
  test("[-7.579, -7.88], [22.737, 23.64]", () => expect(is_orthogonal([-7.579, -7.88], [22.737, 23.64])) |> toEqual(false))
  test("[-2.029, 9.97, 4.172], [-9.231, -6.639, -7.245]", () => expect(is_orthogonal([-2.029, 9.97, 4.172], [-9.231, -6.639, -7.245])) |> toEqual(false))
  test("[-2.328, -7.284, -1.214], [-1.821, 1.072, -2.94]", () => expect(is_orthogonal([-2.328, -7.284, -1.214], [-1.821, 1.072, -2.94])) |> toEqual(true))
  test("[2.118, 4.827], [0.00, 0.00]", () => expect(is_orthogonal([2.118, 4.827], [0.00, 0.00])) |> toEqual(true))
});

describe("Check if a vector is a zero vector", () => {
  test("[-7.579, -7.88]", () => expect(is_zero([-7.579, -7.88])) |> toEqual(false))
  test("[-2.029, 9.97, 4.172]", () => expect(is_zero([-2.029, 9.97, 4.172])) |> toEqual(false))
  test("[-2.328, -7.284, -1.214]", () => expect(is_zero([-2.328, -7.284, -1.214])) |> toEqual(false))
  test("[-2.328, -7.284, -1.214]", () => expect(is_zero([0.00, 0.00])) |> toEqual(true))
});
