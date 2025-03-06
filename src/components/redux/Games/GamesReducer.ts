import { isVoidFunction } from '../../../helpers';
import {
  FETCH_CANCEL,
  FETCH_ERROR,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FetchGame,
  GameAction,
} from '../../../types';

const noop = () => {};
const initialState: FetchGame = {
  isLoading: false,
  response: {
    results: [],
    count: 0,
  },
  error: '',
  cancel: noop
};

function gameReducer(state = initialState, action: GameAction): FetchGame {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
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
    case FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: (typeof (action.payload) === "string")
          ? action.payload
          : state.error
      };
    case FETCH_CANCEL:
      return {
        ...state,
        cancel: (isVoidFunction(action.payload)
          ? action.payload
          : state.cancel)
      }
    default:
      return state;
  }
}

export default gameReducer;
