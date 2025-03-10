import { Dispatch } from 'redux';
import { AxiosError, CanceledError } from 'axios';
import create from '../../../services/http-client';
import { EntityAction, EntityResponse } from '../../../types';
import { LOADING, SUCCESS, CANCEL, ERROR } from '../../../constants';

/**
 * Fetches the specified "entity" items from the API(Refer types.ts for more understanding).
 * Takes a generic type like Game and Genre.
 * Note:- Can only be reused if schemas and base URL are similar for entities you pass.
 */
export function fetchEntities<T>(entity: string) {
  return async (dispatch: Dispatch<EntityAction<T>>) => {
    dispatch({ type: LOADING, entity });
    const service = create(entity);
    try {
      const { response, cancel } = await service.getAll<EntityResponse<T>>();
      dispatch({ type: SUCCESS, entity, payload: response.data.results });
      dispatch({ type: CANCEL, entity, payload: cancel });
    } catch (err) {
      if (err instanceof CanceledError) return;
      if (err instanceof AxiosError) {
        dispatch({ type: ERROR, entity, payload: err.message });
      }
    }
  };
}
