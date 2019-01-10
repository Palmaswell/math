open Jest;
open Expect;
open Math;

describe("Math absolute value from floating number utility", () => {
  test("positive number", () => expect(float_abs(10.00)) |> toEqual(10.00));
  test("negative number", () => expect(float_abs(-10.00)) |> toEqual(10.00));
  test("negative number", () => expect(float_abs(-1.85)) |> toEqual(1.85));
  test("positive number", () => expect(float_abs(12.33)) |> toEqual(12.33));
})

describe("number sign proof function", () => {
  test("negative number", () => expect(float_sign(-3.00)) |> toEqual(-1.00));
  test("positive number", () => expect(float_sign(3.00)) |> toEqual(1.00));
})
