import React from 'react'
import {TodoIcon} from './TodoIcon';
function DeleteIcon({completed,onDelete}) {
  return (
    <TodoIcon 
        type="delete"
        color= {completed ? 'gray' : 'red'}
        onClick={onDelete}
    />
  )
}

export {DeleteIcon}