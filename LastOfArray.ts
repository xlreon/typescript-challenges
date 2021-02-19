type Last<T extends number[] | string[], S extends never[] = [never]> = [
  ...S,
  ...T
][T["length"]];

type tailArr1 = ['a', 'b', 'c']
type tailArr2 = [3, 2, 1]

type tail1 = Last<tailArr1>
type tail2 = Last<tailArr2>