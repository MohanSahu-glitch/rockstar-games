import {
  LOADING,
  SUCCESS,
  ERROR,
  CANCEL,
  SELECT_GENRE,
  SELECT_PLATFORM,
  SELECT_SORT,
  SELECT_SEARCH,
  SELECT_PAGE,
} from '../../../constants';
import { EntitiesState, EntityAction, EntityResponse } from '../../../types';

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
        response: { results: [], count: 0 },
        error: '',
        cancel: () => {},
        selectedGenreId: '',
        selectedPlatformId: '',
        selectedSort: '',
        search: '',
        onPage: 1,
      }),

      isLoading: type === LOADING,

      response:
        type === SUCCESS
          ? {
              results: (payload as EntityResponse<unknown>).results,
              count: (payload as EntityResponse<unknown>).count,
            }
          : type === LOADING
          ? { results: [], count: 0 } //Clears old results when loading
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

      onPage:
        type === SELECT_PAGE ? (payload as number) : state[entity]?.onPage,
    },
  };
}

export default entityReducer;
