type MyReadonly2<T, K extends keyof T> = {
    [X in keyof T extends K ? never : keyof T]: T[X]
} & {
  readonly [X in K]: T[X]
}

interface MyReadonly2Todo {
    title: string
    description: string
    completed: boolean
  }
  
  const readonly2Todo: MyReadonly2<MyReadonly2Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  }
  
  readonly2Todo.title = "Hello" // Error: cannot reassign a readonly property
  readonly2Todo.description = "barFoo" // Error: cannot reassign a readonly property
  readonly2Todo.completed = true // OK