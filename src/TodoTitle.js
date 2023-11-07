import React from 'react'
import './TodoTitle.css';

function TodoTitle( {total, completed} ) {
  return (
    <h1 className='TodoCounter'>

        Has completado 
        <span> {completed} </span> 
        de 
        <span> {total} </span>
        TODOs.
    </h1>
  )
}

export {TodoTitle};