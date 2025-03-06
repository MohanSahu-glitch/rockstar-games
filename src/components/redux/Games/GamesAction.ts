import { Dispatch } from 'redux';
import {
  FETCH_ERROR,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  Game,
  GameAction,
  GameResponse,
} from '../../../types';
import gameService from '../../../entities/game-service';
import { AxiosError } from 'axios';

function fetchRequest(): GameAction {
  return {
    type: FETCH_REQUEST,
  };
}

function fetchSuccess(games: Game[]): GameAction {
  return {
    type: FETCH_SUCCESS,
    payload: games,
  };
}

function fetchError(error: string): GameAction {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
}

//Thunk action creator, returns a async function
export function fetchGames() {
  return async (dispatch: Dispatch<GameAction>) => {
    dispatch(fetchRequest());
    try {
      const { response } = await gameService.getAll<GameResponse>();
      dispatch(fetchSuccess(response.data.results));
    } catch (err) {
      if (err instanceof AxiosError) {
        dispatch(fetchError(err.message));
      }
    }
  };
}
