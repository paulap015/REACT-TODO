import React from 'react'
import {CompleteIcon} from './CompleteIcon';
import {DeleteIcon} from './DeleteIcon';
import './TodoItem.css';
function TodoItem(props) {
  return (
    <li className='TodoItem'>
      <CompleteIcon
        completed = {props.completed}
        onComplete={props.onComplete}
      />
      

      <p className={`TodoItem-p  ${props.completed && "TodoItem-p--complete" } `  } >{props.texto} </p>
      
      <DeleteIcon 
        completed = {props.completed}
        onDelete={props.onDelete} 
      />
      
    </li>
  )
}

export { TodoItem} ;