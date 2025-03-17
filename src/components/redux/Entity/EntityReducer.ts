import {
  LOADING,
  SUCCESS,
  ERROR,
  CANCEL,
  SELECT_GENRE,
  SELECT_PLATFORM,
  SELECT_SORT,
  SELECT_SEARCH,
} from '../../../constants';
import { EntitiesState, EntityAction } from '../../../types';

const initialState: EntitiesState = {};

function entityReducer(
  state = initialState,
  action: EntityAction<unknown>,
): EntitiesState {
  const { entity, type, payload } = action;
  if (!entity) return state;

  return {
    ...state,
    [entity]: {
      ...(state[entity] || {
        isLoading: false,
        response: { results: [] },
        error: '',
        cancel: () => {},
        selectedGenreId: '',
        selectedPlatformId: '',
        selectedSort: '',
        search: '',
      }),
      isLoading: type === LOADING,
      response:
        type === SUCCESS
          ? {
              results: payload as unknown[],
            }
          : type === LOADING
          ? { results: [] } //Clears old results when loading
          : state[entity]?.response,
      error: type === ERROR ? (payload as string) : state[entity]?.error,
      cancel: type === CANCEL ? (payload as () => void) : state[entity]?.cancel,
      selectedGenreId:
        type === SELECT_GENRE
          ? (payload as string)
          : state[entity]?.selectedGenreId,
      selectedPlatformId:
        type === SELECT_PLATFORM
          ? (payload as string)
          : state[entity]?.selectedPlatformId,
      selectedSort:
        type === SELECT_SORT
          ? (payload as string)
          : state[entity]?.selectedSort,
      search:
        type === SELECT_SEARCH ? (payload as string) : state[entity]?.search,
    },
  };
}

export default entityReducer;
