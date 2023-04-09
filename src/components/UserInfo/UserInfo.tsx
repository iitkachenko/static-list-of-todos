import React from 'react';
import { IUser } from '../../interfaces';
import { ITodo } from '../../interfaces';

interface IProps {
  id?: number | undefined;
  name?: string | undefined;
  username?: string | undefined;
  email?: string | undefined;
}

export const UserInfo = (props: IProps/*ITodo["user"]*/) => {
  // console.log(props);
  const {name, email} = props;

  return (
    <div className="card-container mt-1">
      <p className="bold">{name}</p>
      <p>
        <a href={`mailto:${email}`}>{email}</a></p>
    </div>
  )
}