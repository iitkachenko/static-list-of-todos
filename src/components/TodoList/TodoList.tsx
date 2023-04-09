import React from 'react';
import './styles.css';
import { ITodo } from '../../interfaces';
import { TodoInfo } from '../TodoInfo';

interface IProps {
    todos: ITodo[];
}

export const TodoList = ({ todos }: IProps) => {
  const todoElts = todos.map(todo => <TodoInfo key={todo.id} {...todo} />);
  
  return (
    <div className="cards">{ todoElts }</div>
  )
}