
open Jest;
open Expect;
open Root;


describe("Square Root Bisection method", () => {
  test("Root of 10", () => expect(bisection(f(10.00), -2.00, 5.00)) |> toEqual(3.162277660168379))
  test("Root of 9", () => expect(bisection(f(9.00), -2.00, 6.00)) |> toEqual(3.00))
  test("Root of 16", () => expect(bisection(f(16.00), -2.00, 6.00)) |> toEqual(4.00))
  test("Root of 11", () => expect(bisection(f(11.00), -2.00, 5.00)) |> toEqual(3.3166247903554))
});
