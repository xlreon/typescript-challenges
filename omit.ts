type MyExlcude<T, K> = K extends T ? never : T

type MyOmit<T, K extends keyof T> = {
    [X in MyExlcude<keyof T, K>]: T[X]
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