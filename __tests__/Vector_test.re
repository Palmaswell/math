open Jest;

open Expect;
open Vector;


describe("vector_add", () => {
    test("basic floats", () => expect(vector_add([2.2, 4.3, 5.5], [3.7, 6.9, 8.1])) |> toEqual([5.9, 11.2, 13.6]));
    test("floats", () => expect(vector_add([8.218, -9.341], [-1.129, 2.111])) |> toEqual([7.089, -7.229999999999999]));
});

describe("vector_substract", () => {
    test("basic floats", () => expect(vector_substract([-2.0, 3.0, 0.0], [-5.3, -3.0, 5.7])) |> toEqual([3.3, 6.0, -5.7]));
    test("floats", () => expect(vector_substract([7.119, 8.215], [-8.223, 0.878])) |> toEqual([15.342, 7.337]));
});

describe("vector_scale", () => {
    test("floats", () => expect(vector_scale(7.41, [1.671, -1.012, -0.318])) |> toEqual([12.38211, -7.49892, -2.35638]));
});


describe("add_one", () => {
    test("basic", () => expect(add_one([1, 2, 3])) |> toEqual([2, 3, 4]));
})