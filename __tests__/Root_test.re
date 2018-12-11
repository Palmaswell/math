
open Jest;
open Expect;
open Root;


describe("Square Root Bisection method", () => {
  let rootN = f(10.00)
  test("Continuous function", () => expect(rootN(1.00)) |> toEqual(-9.00));
  test("Root of 10", () => expect(bisection(f(10.00), ~a=-2.00, ~b=5.00)) |> toEqual(3.162277660168379));
});
