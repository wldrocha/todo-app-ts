import { useState } from 'react'
import { Todos } from './components/Todos'
import { type Todo as TodoType, TodoId } from './types'

const mockTodos = [
  {
    id: '1',
    title: 'Completar el reto de react',
    completed: true
  },
  {
    id: '2',
    title: 'Aprender Js',
    completed: false
  },
  {
    id: '3',
    title: 'Estar pendiente del gato',
    completed: false
  }
]

const App = () => {
  const [todos, setTodos] = useState(mockTodos)
  const handleRemoveTodo = ({ id }: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }
  //el pick es una forma de extraer formas parciales de los tipos
  const handleCompletedTodo = ({ id }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos onRemoveTodo={handleRemoveTodo} onToggleCompletedTodo={handleCompletedTodo} todos={todos} />
    </div>
  )
}

export default App
