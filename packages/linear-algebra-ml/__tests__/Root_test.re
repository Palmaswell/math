
open Jest;
open Expect;
open Root;


describe("Bisection method", () => {
  test("Root of 10", () => expect(bisection(intermediate_zero(10.00), -2.00, 5.00)) |> toEqual(3.162277660168379))
  test("Root of 9", () => expect(bisection(intermediate_zero(9.00), -2.00, 6.00)) |> toEqual(3.00))
  test("Root of 16", () => expect(bisection(intermediate_zero(16.00), -2.00, 6.00)) |> toEqual(4.00))
  test("Root of 11", () => expect(bisection(intermediate_zero(11.00), -2.00, 5.00)) |> toEqual(3.3166247903554))
  test("More root tests 1", () => expect(bisection(intermediate_zero(-4.587 *. -4.587), 0.00, 4.587)) |> toEqual(4.586999999999999))
  test("More root tests 2", () => expect(bisection(intermediate_zero(0.685 *. 0.685), 0.00, 1.00)) |> toEqual(0.6849999999999996))
  test("More root tests 3", () => expect(bisection(intermediate_zero(8.444 *. 8.444), 0.00, 71.30114)) |> toEqual(8.444))
});

describe("Square root function", () => {
  test("Root of (11)", () => expect(float_sqroot(11.00)) |> toEqual(3.3166247903554))
  test("Root of (-4.587)", () => expect(float_sqroot(-4.587 *. -4.587)) |> toEqual(4.587))
  test("Root of (0.685)", () => expect(float_sqroot(0.685 *. 0.685)) |> toEqual(0.6849999999999996))
  test("Root of (8.444²)", () => expect(float_sqroot(8.444 *. 8.444)) |> toEqual(8.444))
});
