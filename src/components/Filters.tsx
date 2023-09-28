import { TODO_FILTERS, FOOTER_FILTER_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className='filters'>
      {Object.entries(FOOTER_FILTER_BUTTONS).map(([key, { href, literal }]) => (
        <li key={key}>
          <a
            href={href}
            className={key === filterSelected ? 'selected' : ''}
            onClick={(e) => {
              e.preventDefault()
              onFilterChange(key as FilterValue)
            }}
          >
            {key}
          </a>
        </li>
      ))}
    </ul>
  )
}
