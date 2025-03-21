import { Dispatch } from 'redux';
import { AxiosError, AxiosRequestConfig, CanceledError } from 'axios';
import create from '../../../services/http-client';
import { EntityAction, EntityResponse, Genre, Platform } from '../../../types';
import {
  LOADING,
  SUCCESS,
  CANCEL,
  ERROR,
  SELECT_GENRE,
  endpoint,
  SELECT_PLATFORM,
  SELECT_SORT,
  SELECT_SEARCH,
  SELECT_PAGE,
} from '../../../constants';

/**
 * Fetches the specified "entity" items from the API(Refer types.ts for more understanding).
 * Takes a generic type like Game and Genre.
 * Note:- Can only be reused if schemas and base URL are similar for entities you pass.
 */
export function fetchEntities<T>(
  entity: string,
  requestConfig?: AxiosRequestConfig,
) {
  return async (dispatch: Dispatch<EntityAction<T>>) => {
    dispatch({ type: LOADING, entity });
    const service = create(entity);
    try {
      const { response, cancel } = await service.getAll<EntityResponse<T>>(
        requestConfig,
      );
      dispatch({ type: SUCCESS, entity, payload: response.data });
      dispatch({ type: CANCEL, entity, payload: cancel });
    } catch (err) {
      if (err instanceof CanceledError) return;
      if (err instanceof AxiosError) {
        dispatch({ type: ERROR, entity, payload: err.message });
      }
    }
  };
}

/**
 * Filters games with selected genre.
 * API schema accepts Genre as a string in the headers
 */
export function setGenreId(id: string): EntityAction<Genre> {
  return {
    type: SELECT_GENRE,
    entity: endpoint.games,
    payload: id,
  };
}

/**
 * Filters games with selected platform
 * API schema accepts Platforms as a string in the headers
 */
export function setPlatformId(id: string): EntityAction<Platform> {
  return {
    type: SELECT_PLATFORM,
    entity: endpoint.games,
    payload: id,
  };
}

/**
 * Filters games with selected sort
 */
export function setSortName(name: string): EntityAction<string> {
  return {
    type: SELECT_SORT,
    entity: endpoint.games,
    payload: name,
  };
}

/**
 * Filters games with search item
 */
export function setSearch(name: string | undefined): EntityAction<string> {
  return {
    type: SELECT_SEARCH,
    entity: endpoint.games,
    payload: name,
  };
}

/**
 * Fetches games with pagination
 */
export function setOnPage(page: number): EntityAction<string> {
  return {
    type: SELECT_PAGE,
    entity: endpoint.games,
    payload: page,
  };
}
