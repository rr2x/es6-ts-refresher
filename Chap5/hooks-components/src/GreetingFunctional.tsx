import React from 'react';

interface GreetingProps {
  message: string
}

export const Greeting = (props: GreetingProps) => {
  console.log("rendering greeting");

  return (<div>{props.message}</div>);
}