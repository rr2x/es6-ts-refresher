import React, { FC, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

interface ScreenCProps {
  message: string;
  history: any;
  match: any;
}

interface ScreenCParams {
  userId: string;
}

//  <Route path="/c/:userId" component={renderScreenC} />
//  example link: http://localhost:3000/c/1
//  you can ignore parameter destructuring and do the dot notation instead:
//  props.match.params.userId
// match: { params: { userId }}
const ScreenC: FC<ScreenCProps> = ({ message }) => {

  // useEffect(() => {
  //   setTimeout(() => {
  //     history.push("/") // "history" is from props!
  //   }, 3000);
  // });

  // using hooks for history and parameter
  const history = useHistory();
  const { userId } = useParams<ScreenCParams>();

  const onClickGoBack = () => {
    history.goBack();
  }

  return (<div>
    <div>
      { "Your id is " + userId }
    </div>
    <div>
      { message }
    </div>
    <div>
      <button onClick={onClickGoBack}>Go back</button>
    </div>
  </div>);
};

export default ScreenC;
