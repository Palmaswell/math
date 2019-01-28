open Lib


let () =
  let result = Vector.add 2 3 in
  print_endline (string_of_int result);
  let result = Vector.sub 3 1 in
  print_endline (string_of_int result)
