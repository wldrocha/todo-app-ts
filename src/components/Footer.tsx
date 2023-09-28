import { FilterValue, ListOfTodos } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  todos: ListOfTodos
  completedCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  todos,
  filterSelected,
  onClearCompleted,
  handleFilterChange
}) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> Tareas pendientes
      </span>
      <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />
      {completedCount > 0 && (
        <button className='clear-completed' onClick={onClearCompleted}>
          Borrar completadas
        </button>
      )}
    </footer>
  )
}
