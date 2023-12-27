import React from 'react' ;
import './TodoSearch.css';

function TodoSearch( {searchValue,setSearchValue}) {
  //esto es un estado -> se consume y actualiza 
  
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={
        (event)=>{
          setSearchValue (event.target.value) ;
      }
    }
    />
  )
}

export  {TodoSearch};