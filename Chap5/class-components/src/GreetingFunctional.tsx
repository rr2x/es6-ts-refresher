import React from 'react';

interface GreetingProps {
  message: string
}
// functional component, no local state
// use React Context to bypass heirarchy of drilling down props
// or better, use React Redux
export default function Greeting(props: GreetingProps) {
  console.log("rendering Greeting");

  return (<div>{props.message}</div>);
}