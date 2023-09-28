import { useState } from 'react'
import { Todos } from './components/Todos'
import { type Todo as TodoType, TodoId, FilterValue, TodoTitle, TodoCompleted } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

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
  const [filtersSelected, setFiltersSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
  const handleRemoveTodo = ({ id }: { id: string }) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }
  //el pick es una forma de extraer formas parciales de los tipos
  const handleCompletedTodo = ({ id }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFiltersSelected(filter)
  }

  const activeCount = todos.filter((todo) => !todo.completed).length

  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter((todo) => {
    if (filtersSelected === TODO_FILTERS.ACTIVE) {
      return !todo.completed
    }
    if (filtersSelected === TODO_FILTERS.COMPLETED) {
      return todo.completed
    }
    return todo
  })

  const handleRemoveCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = ({ title }: TodoTitle) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const handleUpdateTitle = ({ id, title }: { id: string; title: string }): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: { id: string; completed: boolean }): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: completed
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo} />
      <Todos
        onRemoveTodo={handleRemoveTodo}
        onToggleCompletedTodo={handleCompletedTodo}
        setTitle={handleUpdateTitle}
        todos={filteredTodos}
      />
      <Footer
        todos={todos}
        activeCount={activeCount}
        filterSelected={filtersSelected}
        completedCount={completedCount}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleRemoveCompleted}
      />
    </div>
  )
}

export default App
