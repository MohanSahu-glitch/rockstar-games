import { Dispatch } from 'redux';
import { Game, GameAction, GameResponse } from '../../../types';
import gameService from '../../../entities/game-service';
import { AxiosError, CanceledError } from 'axios';
import {
  CANCEL_GAMES,
  ERROR_GAMES,
  GET_GAMES,
  LOADING_GAMES,
} from '../../../constants';

function loadGames(): GameAction {
  return {
    type: LOADING_GAMES,
  };
}

function getGames(games: Game[]): GameAction {
  return {
    type: GET_GAMES,
    payload: games,
  };
}

function errorGames(error: string): GameAction {
  return {
    type: ERROR_GAMES,
    payload: error,
  };
}

function cancelGames(cancel: () => void): GameAction {
  return {
    type: CANCEL_GAMES,
    payload: cancel,
  };
}

//Thunk action creator, returns a async function
export function fetchGames() {
  return async (dispatch: Dispatch<GameAction>) => {
    dispatch(loadGames());
    try {
      const { response, cancel } = await gameService.getAll<GameResponse>();
      dispatch(getGames(response.data.results));
      dispatch(cancelGames(cancel));
    } catch (err) {
      if (err instanceof CanceledError) {
        return;
      }
      if (err instanceof AxiosError) {
        dispatch(errorGames(err.message));
      }
    }
  };
}
