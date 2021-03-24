import React from 'react';
import { AppState } from '../../redux/reducers/_rootReducer';
import { useSelector } from 'react-redux';

export const UserDisplay = () => {
  const user = useSelector((state: AppState) => state.user);

  if (user) {
    console.log('user', user);
    return (
      <React.Fragment>
        <div>
          <label>username:</label>
          &nbsp;{user.username}
        </div>
        <div>
          <label>email:</label>
          &nbsp;{user.email}
        </div>
        <div>
          <label>city:</label>
          &nbsp;{user.city}
        </div>
      </React.Fragment>
    );
  } else {
    return null;
  }
}