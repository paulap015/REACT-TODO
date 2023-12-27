import React from 'react';
import './App.css';
import { TodoTitle } from './TodoTitle';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import {CreateTodoButton} from './CreateTodoButton';

const defaultTodos= [ 
  {texto:'Lalala ', completed:true} , 
  {texto:'Terminar curso', completed:false},
  {texto:'Llorar en la lloreria',completed:true},
  {texto:'Llorar en la lloreriaa',completed:true},
  {texto:'LALALA',completed:false},
  {texto:'canción de la viquingá'}

];
function App() {
  const [searchValue, setSearchValue] = React.useState('');
  
  const [todos,setTodos] = React.useState(defaultTodos);
  
  const completedTodos = todos.filter(todo => todo.completed===true).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) =>  {
      const todoText =  todo.texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      const searchText = searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      
      return todoText.includes(searchText);
    }
   
    
  );

  const completeTodo = (text) =>{
    const newTodos =[...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.texto === text  
    );
    newTodos[todoIndex].completed=!newTodos[todoIndex].completed;
    setTodos(newTodos);
  }

  const deleteTodo = (text) =>{
    const newTodos =[...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.texto === text  
    );
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }
  console.log("Los usuarios buscan "+searchValue)
  // setTodos(defaultTodos);
  return (
    <React.Fragment>

      <TodoTitle total={totalTodos}  completed = {completedTodos}  />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.texto} 
            texto = {todo.texto}
            completed = {todo.completed}
            onComplete= {()=>completeTodo(todo.texto)}
            onDelete={()=> deleteTodo(todo.text)}
          />
        )
        )}
      </TodoList>
    
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
