import { applyMiddleware, combineReducers, createStore } from 'redux';
import gameReducer from './Games/GamesReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import genreReducer from './Genres/GenresReducer';

const rootReducer = combineReducers({
  game: gameReducer,
  genre: genreReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
