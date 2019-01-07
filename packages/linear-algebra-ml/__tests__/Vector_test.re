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

/* describe("magnitude", () => {
  test("test", () => expect(magnitude([-4.587, 0.685, 8.444])) |> toEqual(9.633842950764768))
}); */
