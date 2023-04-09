import React from 'react';
import './App.css';

import { todos } from './api/todos';
import { users }  from './api/users';
import { TodoList } from './components/TodoList';

export const App = () => {
  // console.log(todos);
  // console.log(users);

  const preparedTodos = todos.map(todo => (
    { 
      ...todo,
      user: users.find(user => user.id === todo.userId) || null,
    }  
  ));

  // console.log(preparedTodos);

  return (
      <div className="app">
        <h1 className="text-blue">Static list of todos</h1>
        <TodoList todos={preparedTodos} />
      </div>
  );
}
