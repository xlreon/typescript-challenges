type If<T extends boolean, X extends string, Y extends string> = T extends true
  ? X
  : Y;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
