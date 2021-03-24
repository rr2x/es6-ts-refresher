import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import './App.css';
import { UserActionEnum, createUserPayload } from '../redux/reducers/UserReducer';
import { PostActionEnum, createPostPayload } from '../redux/reducers/PostReducer';
import { UserDisplay } from '../comps/user/UserDisplay';
import { PostDisplay } from '../comps/post/PostDisplay';

function App() {
  const [userId, setUserId] = useState(0);
  const dispatch = useDispatch();
  const [postId, setPostId] = useState(0);

  const getId = (e: React.ChangeEvent<HTMLInputElement>): number => e.target.value ? Number(e.target.value) : 0;

  const onChangeUserId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userIdFromInput = getId(e);
    console.log('userId', e.target.value);
    setUserId(userIdFromInput);

    const usersResponse = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (usersResponse.ok) {
      const users = await usersResponse.json();
      console.log("users", users);

      const usr = users.find((userItem: any) => userItem && userItem.id === userIdFromInput);

      dispatch({ type: UserActionEnum.GET, payload: createUserPayload(usr) });
    }
  }

  const onChangePostId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const postIdFromInput = getId(e);
    setPostId(postIdFromInput);

    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postIdFromInput}`);

    if (postResponse.ok) {
      const post = await postResponse.json();

      console.log(`post`, post);

      dispatch( { type: PostActionEnum.GET, payload: createPostPayload(post) });
    }
  }

  return (
    <React.Fragment>
      <div style={{width: "300px"}}>
        <div className = "App">
          <label>user id</label>
          <input value={userId} onChange={onChangeUserId} />
          <UserDisplay />
        </div>
      </div>
      <br/>
      <div style={{width: "300px"}}>
        <div className = "App">
          <label>post id</label>
          <input value={postId} onChange={onChangePostId} />
          <PostDisplay />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
