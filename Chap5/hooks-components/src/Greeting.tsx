import React, { FC, useState, useEffect } from 'react';

interface GreetingProps {
  name?: string
}

export const Greeting: FC<GreetingProps> =
  ({ name }: GreetingProps) => {
    const [message, setMessage] = useState("");
    useEffect(() => {
      if (name) {
        setMessage(`Hello from, ${name}`);
      }
    }, [name]); // if name changed, this will trigger

    // return is the call to render()

    if (!name) {
      return <div>no name given</div>
    }
    return <div>{message}</div>;
  }