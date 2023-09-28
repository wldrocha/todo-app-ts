export type Todo = {
  id: string
  title: string
  completed: boolean
}

//Maneras de obtener el tipo de una propiedad de un type o interfaz
// export type todpTitle = Todo['id']
export type TodoId = Pick<Todo, 'id'>

// todos: Array<Todo>
export type ListOfTodos = Todo[]
