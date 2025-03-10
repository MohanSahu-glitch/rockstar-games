import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import entityReducer from './Entity/EntityReducer';

const store = createStore(
  entityReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
export type RootState = ReturnType<typeof entityReducer>;
export type AppDispatch = typeof store.dispatch;
