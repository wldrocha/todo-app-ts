import { useState } from 'react'
import { Todos } from './components/Todos'

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
  return (
    <div className='todoapp'>
      <Todos todos={todos} />
    </div>
  )
}

export default App
