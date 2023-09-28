import { useEffect, useId, useRef, useState } from 'react'
import { TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  id: string
  onRemoveTodo: ({ id }: { id: string }) => void
  onToggleCompletedTodo: ({ id }: Pick<TodoType, 'id' | 'completed'>) => void
  isEditing: string
  setIsEditing: (completed: string) => void
  setTitle: (params: { id: string; title: string }) => void
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  isEditing,
  setIsEditing,
  onRemoveTodo,
  setTitle,
  onToggleCompletedTodo,
}) => {
  const checkboxCompleted = useId()
  const [editedTitle, setEditedTitle] = useState(title)
  const inputEditTitle = useRef<HTMLInputElement>(null)

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      setEditedTitle(editedTitle.trim())

      if (editedTitle !== title) {
        setTitle({ id, title: editedTitle })
      }

      if (editedTitle === '') onRemoveTodo({ id })

      setIsEditing('')
    }

    if (e.key === 'Escape') {
      setEditedTitle(title)
      setIsEditing('')
    }
  }

  useEffect(() => {
    inputEditTitle.current?.focus()
  }, [isEditing])

  return (
    <>
      <div className='view'>
        <input
          className='toggle'
          checked={completed}
          type='checkbox'
          onChange={(e) => {
            onToggleCompletedTodo({
              id,
              completed: e.target.checked
            })
          }}
        />
        <label
        onDoubleClick={() => {
          setIsEditing(id)
        }}
        >
          {title}
        </label>
        <button
          className='destroy'
          onClick={() => {
            onRemoveTodo({ id })
          }}
        ></button>
      </div>

      <input
        className='edit'
        value={editedTitle}
        onChange={(e) => {
          setEditedTitle(e.target.value)
        }}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          setIsEditing('')
        }}
        ref={inputEditTitle}
      />
    </>
  )
}
