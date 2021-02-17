type MyReadonly<T> = {
    readonly [X in keyof T]: T[X]
}

interface ReadOnlyTodo {
    title: string
    description: string
  }
  
  const readOnlyTodo: MyReadonly<ReadOnlyTodo> = {
    title: "Hey",
    description: "foobar"
  }
  
  readOnlyTodo.title = "Hello" // Error: cannot reassign a readonly property
  readOnlyTodo.description = "barFoo" // Error: cannot reassign a readonly property