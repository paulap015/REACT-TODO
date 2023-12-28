import React from 'react'
import './TodoTitle.css';

function TodoTitle( {total, completed} ) {
  
    return (
      total!==completed ?
        <h1 className='TodoCounter'>
            
            Has completado 
            <span> {completed} </span> 
            de 
            <span> {total} </span>
            TODOs.
        </h1>
      :
      <h1 className='TodoCounter'>
        
        COMPLETASTE TODAS TUS TAREAS wiiii !!
    </h1>
    )
  
  
}

export {TodoTitle};