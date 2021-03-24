import { createStore } from 'redux';
import { rootReducer } from '../reducers/_rootReducer';

export const reduxStore = createStore(rootReducer, {});
