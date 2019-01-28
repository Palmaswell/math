# Applied Linear Algebra – Vectors, Matrices, and Least Squares
> A set of (Linear Algebra)[https://web.stanford.edu/~boyd/vmls/] exercises written in OCaml.

## Requisites

1. OCaml `brew install ocaml`
2. opam `brew install opam`
3. `opam install merlin ocp-indent dune utop`

## Getting started
1. `opam switch create . ocaml-base-compiler.4.07.0` (opam v2)
2. `eval $(opam config env)`


## Development
1. Build `dune build index.exe`
2. Build and run `dune exec ./bin/index.exe`
3. Clean the project `dune clean`