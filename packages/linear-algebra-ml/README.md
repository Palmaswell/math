# Applied Linear Algebra – Vectors, Matrices, and Least Squares
> A set of (Linear Algebra)[https://web.stanford.edu/~boyd/vmls/] exercises written in OCaml.

## Requisites
1. OCaml `brew install ocaml`
2. opam `brew install opam`


## Getting started
1. `opam install --deps-only linear-algebra-ml`



## Development
1. Build `dune build index.exe`
2. Build and run `dune exec ./bin/index.exe`
3. Clean the project `dune clean`


## Debugging and fast feedback
1. Invoke utop having your source inside `dune utop <dir>`
2. `utop open Lib;;`

## Notes
While .ml files contain implementations, interfaces are put into files with .mli extensions. An interface file is also the place where to put API doc comments.
