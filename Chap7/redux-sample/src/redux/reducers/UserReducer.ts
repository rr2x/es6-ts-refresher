export enum UserActionEnum {
  GET = "GET"
}

interface User {
  id: string;
  username: string;
  email: string;
  city: string;
}

interface UserAction {
  type: UserActionEnum;
  payload: User | null;
}

export const createUserPayload = (usr: any): User => (
  {
    id: usr.id,
    username: usr.username,
    email: usr.email,
    city: usr.address.city
  }
);

export const UserReducer = (state: User | null = null, action: UserAction): User | null => {
  switch(action.type) {
    case UserActionEnum.GET:
      console.log(`user reducer`, action.payload);
      return action.payload;
    default:
      return state;
  }
}