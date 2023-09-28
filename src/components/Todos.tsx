/* 
Diferencia entre type y interface

Type no se puede exteneder facilmente
en cambio la interfaz es el contrato de un objeto
cuando son objetos suele ser buena idea de hacer interface con un contrato
*/

import { TodoId, type ListOfTodos, type Todo as TodoType } from '../types'
import { Todo } from './Todo'

//Para indicar que prop va a recibir
export interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompletedTodo: ({ id }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompletedTodo }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <Todo key={todo.id} onToggleCompletedTodo={onToggleCompletedTodo} onRemoveTodo={onRemoveTodo} {...todo} />
        </li>
      ))}
    </ul>
  )
}
