import {
  CANCEL_GENRES,
  ERROR_GENRES,
  GET_GENRES,
  LOADING_GENRES,
} from '../../../constants';
import { isVoidFunction } from '../../../helpers';
import { FetchGenre, GenreAction } from '../../../types';

const noop = () => {};
const initialState: FetchGenre = {
  isLoading: false,
  response: {
    results: [],
    count: 0,
  },
  error: '',
  cancel: noop,
};

function genreReducer(state = initialState, action: GenreAction): FetchGenre {
  switch (action.type) {
    case LOADING_GENRES:
      return {
        ...state,
        isLoading: true,
      };
    case GET_GENRES:
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
    case ERROR_GENRES:
      return {
        ...state,
        isLoading: false,
        error:
          typeof action.payload === 'string' ? action.payload : state.error,
      };
    case CANCEL_GENRES:
      return {
        ...state,
        cancel: isVoidFunction(action.payload) ? action.payload : state.cancel,
      };
    default:
      return state;
  }
}

export default genreReducer;
