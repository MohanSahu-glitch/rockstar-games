import {
  CANCEL_GAMES,
  ERROR_GAMES,
  GET_GAMES,
  LOADING_GAMES,
} from '../../../constants';
import { isVoidFunction } from '../../../helpers';
import { FetchGame, GameAction } from '../../../types';

const noop = () => {};
const initialState: FetchGame = {
  isLoading: false,
  response: {
    results: [],
    count: 0,
  },
  error: '',
  cancel: noop,
};

function gameReducer(state = initialState, action: GameAction): FetchGame {
  switch (action.type) {
    case LOADING_GAMES:
      return {
        ...state,
        isLoading: true,
      };
    case GET_GAMES:
      return {
        ...state,
        isLoading: false,
        response: {
          ...state.response,
          results: Array.isArray(action.payload)
            ? [...action.payload]
            : [...state.response.results],
        },
      };
    case ERROR_GAMES:
      return {
        ...state,
        isLoading: false,
        error:
          typeof action.payload === 'string' ? action.payload : state.error,
      };
    case CANCEL_GAMES:
      return {
        ...state,
        cancel: isVoidFunction(action.payload) ? action.payload : state.cancel,
      };
    default:
      return state;
  }
}

export default gameReducer;
