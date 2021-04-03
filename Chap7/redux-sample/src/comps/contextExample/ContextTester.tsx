import React, { createContext, useState } from 'react';
import UserNameComp from './UserNameComp';
import UserAgeComp from './UserAgeComp';

export const TestContext = createContext<{ userName: string, userAge: number }>({
  userName: "", userAge: 0
});

const ContextTester = () => {
  const [ userAge, setUserAge ] = useState(20);
  const [ localState, setLocalState ] = useState(0);

  const onClickAge = () =>  setUserAge(userAge + 1);
  const onClickLocalState = () => setLocalState(localState + 1);

  return (<React.Fragment>
    <button onClick={onClickAge}>Update age</button>
    <TestContext.Provider value={{ userName: "dave", userAge }}>
      <UserAgeComp />
      <br />
      <UserNameComp />
    </TestContext.Provider>
    <button onClick={onClickLocalState}>Update localstate</button>
    &nbsp;<label>{localState}</label>
  </React.Fragment>);
}

export default ContextTester;