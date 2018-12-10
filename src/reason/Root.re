let f = (n, x) => (x *. x) -. n;

/* let bisection = (foo, a, b) => {
  let TOL = 1e-2;
  let NMAX = 1e+3;
  let c = a +. b /. 2.0;
  let a = foo()

}; */

/* let bisection = (f, a, b) => {
  let c = (a +. b) /. 2.0;
  let rec aux = (~i=0, ~tol=1e-2, ~n_max=1000, c) => {
    switch c {
    | c when f(c) == 0.0 => c
    | c when (b -. a) /. 2.0 < tol => c
    | _ => aux(~i= i + 1, (a +. b) /. 2.0)
    };
  }
  aux(c);
}; */
