import React from 'react';
import './App.css';
import { DisplayText } from './DisplayText';

function App() {
  const getUserFullname = async (username: string): Promise<string> => {
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    if (usersResponse.ok) {
      const users = await usersResponse.json();
      console.log(...users);
      const userByName = users.find((usr: any) => usr.username.toLowerCase() === username);
      if (userByName === undefined) {
        return "<not found>";
      }
      return userByName.name;
    }
    return "";
  }


  return (
    <div className="App">
      <DisplayText getUserFullname={getUserFullname}/>
    </div>
  );
}

export default App;
