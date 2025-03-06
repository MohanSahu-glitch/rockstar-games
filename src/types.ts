export type Game = {
  id: number;
  name: string;
};

export type GameResponse = {
  results: Game[];
  count: number;
};

export type FetchGame = {
  isLoading: boolean;
  response: GameResponse;
  error: string;
};

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export type GameAction = {
  type: string;
  payload?: Game[] | string;
};
