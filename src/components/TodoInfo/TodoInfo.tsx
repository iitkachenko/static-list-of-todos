import React, { useState } from 'react';
import './styles.css';
import { ITodo } from '../../interfaces';
import { UserInfo } from '../UserInfo';

export const TodoInfo = (props: ITodo) => {
  const { user, title, completed } = props;
  const [ isTrancated, setIsTrancated ] = useState(true);

  return (
    <div className="card">
      <div
        className={`card-header card-container ${isTrancated ? 'trancated' : ''}`}
        onClick={() => setIsTrancated(prev => !prev)}
      >
        <h2>{title[0].toUpperCase() + title.slice(1)}</h2>
      </div>
      <UserInfo user={user} />
      <p className="card-status card-container">
        Completed: {completed ? <span className="bold text-green">
                                  <span>✓</span>
                                </span>
                              : <span className="bold text-red">
                                  <span className="top-2">x</span>
                                </span>}
      </p>
    </div>
  )
}