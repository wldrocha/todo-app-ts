import { useId } from 'react'
import { type Todo as TodoType } from '../types'

type Props = TodoType

export const Todo: React.FC<Props> = ({ id, title, completed }) => {
  const checkboxCompleted = useId()
  return (
    <div className='view'>
      <input className='toggle' id={checkboxCompleted} type='checkbox' checked={completed} onChange={() => {}} />
      <label htmlFor={checkboxCompleted}>{title}</label>
      <button className='destroy' onClick={() => {}}></button>
    </div>
  )
}
