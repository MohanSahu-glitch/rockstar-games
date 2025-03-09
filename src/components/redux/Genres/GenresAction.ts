import { Dispatch } from 'redux';
import { Genre, GenreAction, GenreResponse } from '../../../types';
import { AxiosError, CanceledError } from 'axios';
import {
  CANCEL_GENRES,
  ERROR_GENRES,
  GET_GENRES,
  LOADING_GENRES,
} from '../../../constants';
import genreService from '../../../entities/genre-service';

function loadGenres(): GenreAction {
  return {
    type: LOADING_GENRES,
  };
}

function getGenres(GENRES: Genre[]): GenreAction {
  return {
    type: GET_GENRES,
    payload: GENRES,
  };
}

function errorGenres(error: string): GenreAction {
  return {
    type: ERROR_GENRES,
    payload: error,
  };
}

function cancelGenres(cancel: () => void): GenreAction {
  return {
    type: CANCEL_GENRES,
    payload: cancel,
  };
}

//Thunk action creator, returns a async function
export function fetchGenres() {
  return async (dispatch: Dispatch<GenreAction>) => {
    dispatch(loadGenres());
    try {
      const { response, cancel } = await genreService.getAll<GenreResponse>();
      dispatch(getGenres(response.data.results));
      dispatch(cancelGenres(cancel));
    } catch (err) {
      if (err instanceof CanceledError) {
        return;
      }
      if (err instanceof AxiosError) {
        dispatch(errorGenres(err.message));
      }
    }
  };
}
