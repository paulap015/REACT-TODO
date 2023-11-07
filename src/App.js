import logo from './platzi.webp';
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
  {texto:'Llorar en la lloreria',completed:true}
];
function App() {
  return (
    <React.Fragment>

      <TodoTitle total={defaultTodos.length}  completed = {defaultTodos.filter(todo=> todo.completed===true).length}  />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.texto} 
            texto = {todo.texto}
            completed = {todo.completed}
          />
        )
        )}
      </TodoList>
    
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
