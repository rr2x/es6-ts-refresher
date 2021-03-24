import { combineReducers } from 'redux';
import { UserReducer as user } from './UserReducer';
import { PostReducer as post } from './PostReducer';

export const rootReducer = combineReducers({ user, post });

export type AppState = ReturnType<typeof rootReducer>;