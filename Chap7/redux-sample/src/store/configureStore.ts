import { createStore } from 'redux';
import { rootReducer } from './AppState';

export const configureStore = () => createStore(rootReducer, {});
