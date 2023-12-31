import { TODO_FILTERS } from './consts'

export type Todo = {
  id: string
  title: string
  completed: boolean
}

//Maneras de obtener el tipo de una propiedad de un type o interfaz
// export type todpTitle = Todo['id']
export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

// todos: Array<Todo>
export type ListOfTodos = Todo[]
//utiliza alguna de las keys de TODO_FILTERS
export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]



