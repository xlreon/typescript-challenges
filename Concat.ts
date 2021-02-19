type Concat<T extends number[], S extends number[]> = [...T, ...S];

type Result = Concat<[1], [2]>; // expected to be [1, 2]
