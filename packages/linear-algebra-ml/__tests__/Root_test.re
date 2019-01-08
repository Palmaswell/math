
open Jest;
open Expect;
open Root;


describe("Square Root Bisection method", () => {
  test("Root of 10", () => expect(bisection(f(10.00), -2.00, 5.00)) |> toEqual(3.162277660168379))
  test("Root of 9", () => expect(bisection(f(9.00), -2.00, 6.00)) |> toEqual(3.00))
  test("Root of 16", () => expect(bisection(f(16.00), -2.00, 6.00)) |> toEqual(4.00))
  test("Root of 11", () => expect(bisection(f(11.00), -2.00, 5.00)) |> toEqual(3.3166247903554))
  test("More root tests 1", () => expect(bisection(f(-4.587 *. -4.587), 0.00, 4.587)) |> toEqual(4.586999999999999))
  test("More root tests 2", () => expect(bisection(f(0.685 *. 0.685), 0.00, 1.00)) |> toEqual(0.6849999999999996))
  test("More root tests 3", () => expect(bisection(f(8.444 *. 8.444), 0.00, 71.30114)) |> toEqual(8.444))
});
