import React, { useRef } from 'react';
import { AppState } from '../../redux/reducers/_rootReducer';
import { useSelector } from 'react-redux';

export const PostDisplay = React.memo(() => {
  const renderCount = useRef(0);
  console.log(`renders PostDisplay`, renderCount.current++);

  const post = useSelector((state: AppState) => state.post);
  if (post) {
    return (
      <React.Fragment>
        <div>
          <label>title:</label>
          &nbsp;{post.title}
        </div>
        <div>
          <label>body:</label>
          &nbsp;{post.body}
        </div>
      </React.Fragment>
    );
  } else {
    return null;
  }
});