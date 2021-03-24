import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { USER_TYPE, User } from './store/UserReducer';

function App() {
  const [userId, setUserId] = useState(0);
  const dispatch = useDispatch();

  const onChangeUserId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userIdFromInput = e.target.value ? Number(e.target.value) : 0;
    console.log('userId', e.target.value);
    setUserId(userIdFromInput);

    const usersResponse = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (usersResponse.ok) {
      const users = await usersResponse.json();
      console.log("users", users);

      const usr = users.find((userItem: any) => userItem && userItem.id === userIdFromInput);

      const createPayload = (usr: any): User => (
        {
          id: usr.id,
          username: usr.username,
          email: usr.email,
          city: usr.address.city
        }
      );

      dispatch({ type: USER_TYPE, payload: createPayload(usr) });
    }
  }

  return (
    <div className="App">
      <label>user id</label>
      <input value={userId} onChange={onChangeUserId} />
    </div>
  );
}

export default App;
