import { useId } from 'react'
import { TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompletedTodo: ({ id }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompletedTodo }) => {
  const checkboxCompleted = useId()
  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompletedTodo({
      id,
      completed: event.target.checked
    })
  }

  return (
    <div className='view'>
      <input
        className='toggle'
        id={checkboxCompleted}
        type='checkbox'
        checked={completed}
        onChange={(e) => {
          handleCheckbox(e)
        }}
      />
      <label htmlFor={checkboxCompleted}>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          onRemoveTodo({ id })
        }}
      ></button>
    </div>
  )
}
