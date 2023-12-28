import React from 'react';
import './App.css';
// import { TodoTitle } from '../TodoTitle';
// import { TodoSearch } from '../TodoSearch';
// import { TodoItem } from '../TodoItem';
// import { TodoList } from '../TodoList';
// import {CreateTodoButton} from '../CreateTodoButton/index';
import {useLocalStorage} from './hooks/useLocalStorage';
import { AppUI } from './AppUI';
// const defaultTodos= [ 
//   {text:'Lalala ', completed:true} , 
//   {text:'Terminar curso', completed:false},
//   {text:'Llorar en la lloreria',completed:true},
//   {text:'Llorar en la lloreriaa',completed:true},
//   {text:'LALALA',completed:false},
//   {text:'canción de la viquingá'}

// ];

// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))
function App() {
  // const localStorageTodos = localStorage.getItem('TODOS_V1');

  // let parsedTodos;
  
  // if (!localStorageTodos) {
  //   localStorage.setItem('TODOS_V1', JSON.stringify([]));
  //   parsedTodos = [];
  // } else {
  //   parsedTodos = JSON.parse(localStorageTodos);
  // }

  const [todos,setTodos] = useLocalStorage('TODOS_V1',[])

  const [searchValue, setSearchValue] = React.useState('');
  
  
  
  const completedTodos = todos.filter(todo => todo.completed===true).length;
  const totalTodos = todos.length;

  //guardar todos en localstorage y en el estado se llamacada que hayaun cambios
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    
    setTodos(newTodos);
  };

  const searchedTodos = todos.filter(
    (todo) =>  {
      const todoText =  todo.text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      const searchText = searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      
      return todoText.includes(searchText);
    }
   
    
  );

  const completeTodo = (text) =>{
    const newTodos =[...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text  
    );
    newTodos[todoIndex].completed=!newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) =>{
    const newTodos =[...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text  
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }
  console.log("Los usuarios buscan "+searchValue)
  // setTodos(defaultTodos);
  return (
    <AppUI
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
  />
  );
}

export default App;
