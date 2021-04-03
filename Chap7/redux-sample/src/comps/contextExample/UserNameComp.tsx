import React, { useContext, useRef } from 'react';
import { TestContext } from './ContextTester';

const UserNameComp = React.memo (() => {
  const renders = useRef(0);
  console.log(`renders UserNameComp ${renders.current++}`);

  const { userName } = useContext(TestContext);
  console.log(`username UserNameComp ${userName}`);

  return <div>
    {userName}
  </div>
});

export default UserNameComp;