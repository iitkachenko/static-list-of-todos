import React from 'react';
import { IUser } from '../../interfaces';

interface IProps {
  user: IUser | null;
}

export const UserInfo = ({ user }: IProps) => {
  const { name, email } = user || {name: 'Unknown User', email: ''};

  return (
    <div className="card-container mt-1">
      <p className="bold">{name}</p>
      <p>
        {
          email ? <a href={`mailto:${email}`}>{email}</a>
                : <span className="text-blue">Unknown Email</span>
        }
      </p>  
    </div>
  )
}