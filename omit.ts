type Key<T> = keyof T

type MyExclude<T, K> = K extends T ? never : K

type MyOmit<T, K extends Key<T>> = {
    [X in MyExclude<Key<T>, K>]: T[X]
}

interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  type OmitPreview = MyOmit<Todo, 'description' | 'title'>
  
  const omitTodo: OmitPreview = {
    completed: false,
  }