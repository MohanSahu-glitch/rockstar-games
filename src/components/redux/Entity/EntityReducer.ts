import { LOADING, SUCCESS, ERROR, CANCEL, SELECT } from '../../../constants';
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
        response: { results: [], count: 0 },
        error: '',
        cancel: () => {},
        selectedGenreId: '',
      }),
      isLoading: type === LOADING,
      response:
        type === SUCCESS
          ? {
              results: payload as unknown[],
            }
          : state[entity]?.response,
      error: type === ERROR ? (payload as string) : state[entity]?.error,
      cancel: type === CANCEL ? (payload as () => void) : state[entity]?.cancel,
      selectedGenreId:
        type === SELECT ? (payload as string) : state[entity]?.selectedGenreId,
    },
  };
}

export default entityReducer;
