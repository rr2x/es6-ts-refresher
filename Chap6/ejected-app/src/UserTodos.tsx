import React, { FC, useState, useEffect } from 'react';

interface UserTodosProps {
  username: string;
}

const UserTodos: FC<UserTodosProps> = ({username}) => {
  const [todos, setTodos] = useState<Array<JSX.Element>>();

  const setUsersTodos = async () => {
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    if(usersResponse) {
      const users = await usersResponse.json();
      const userByName = users.find((usr: any) => usr.username.toLowerCase() === username);

      console.log("user by username", userByName);

      const todosResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (userByName && todosResponse) {
        const todos = await todosResponse.json();
        const usersTodos = todos.filter((todo: any) => todo.userId === userByName.id);
        const todosList = usersTodos.map((todo: any)=> <li key={todo.id}>{todo.title}</li>);
        setTodos(todosList);
        console.log("user todos", usersTodos);
      }
    }
  }

  useEffect(() => {
    if (username) {
      setUsersTodos();
    }
  }, [username]);

  return (
    <ul style={{marginTop: '1rem', listStyleType: 'none'}}>
      {todos}
    </ul>
  );
}

export default UserTodos;