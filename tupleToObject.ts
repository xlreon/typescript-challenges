type TupleToObject<T extends readonly string[]> = {
    [X in T[number]]: X;
}

const tuple = ['a', 'b', 'c'] as const
const result: TupleToObject<typeof tuple>;