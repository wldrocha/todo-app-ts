import { useState } from 'react'
import { TodoId, type ListOfTodos, type Todo as TodoType } from '../types'
import { Todo } from './Todo'
/* 
Diferencia entre type y interface

Type no se puede exteneder facilmente
en cambio la interfaz es el contrato de un objeto
cuando son objetos suele ser buena idea de hacer interface con un contrato
*/

//Para indicar que prop va a recibir
export interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: { id: string }) => void
  onToggleCompletedTodo: ({ id }: Pick<TodoType, 'id' | 'completed'>) => void
  setTitle: (params: { id: string; title: string }) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompletedTodo, setTitle, setCompleted }) => {
  const [isEditing, setIsEditing] = useState('')

  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`${todo.completed ? 'completed' : ''}${isEditing === todo.id ? 'editing' : ''}
        `}
        >
          <Todo
            key={todo.id}
            onToggleCompletedTodo={onToggleCompletedTodo}
            onRemoveTodo={onRemoveTodo}
            isEditing={isEditing}
            setTitle={setTitle}
            setIsEditing={setIsEditing}
            {...todo}
          />
        </li>
      ))}
    </ul>
  )
}
