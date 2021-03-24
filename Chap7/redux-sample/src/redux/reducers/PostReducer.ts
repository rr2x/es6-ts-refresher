export enum PostActionEnum {
  GET = "GET"
}

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostAction {
  type: PostActionEnum;
  payload: Post | null;
}

export const createPostPayload = (post: any): Post => (
  {
    id: post.id,
    title: post.title,
    body: post.body
  }
);

export const PostReducer = (state: Post | null = null, action: PostAction): Post | null => {
  switch(action.type) {
    case PostActionEnum.GET:
      return action.payload;
    default:
      return state;
  }
};
