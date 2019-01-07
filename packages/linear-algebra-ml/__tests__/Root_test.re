
open Jest;
open Expect;
open Root;


describe("Square Root Bisection method", () => {
  test("Root of 10", () => expect(bisection(f(10.00), -2.00, 5.00)) |> toEqual(3.162277660168379))
  test("Root of 9", () => expect(bisection(f(9.00), -2.00, 6.00)) |> toEqual(3.00))
  test("Root of 16", () => expect(bisection(f(16.00), -2.00, 6.00)) |> toEqual(4.00))
  test("Root of 11", () => expect(bisection(f(11.00), -2.00, 5.00)) |> toEqual(3.3166247903554))
  test("More root tests 1", () => expect(bisection(f(-4.587 *. -4.587), -2.00, 5.00)) |> toEqual(4.587))
  /* test("More root tests 2", () => expect(bisection(f(0.685), -2.00, 5.00)) |> toEqual(0.685)) */
  /* test("More root tests 3", () => expect(bisection(f(8.444 *. 8.444), -2.00, 5.00)) |> toEqual(8.444)) */
});
