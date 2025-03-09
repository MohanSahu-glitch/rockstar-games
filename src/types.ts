export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
};

export type Genre = {
  id: number;
  name: string;
};

export type Platform = {
  id: number;
  slug: string;
  name: string;
};

export type GameResponse = {
  results: Game[];
  count: number;
};

export type GenreResponse = {
  results: Genre[];
  count: number;
};

export type FetchGame = {
  isLoading: boolean;
  response: GameResponse;
  error: string;
  cancel: () => void;
};

export type FetchGenre = {
  isLoading: boolean;
  response: GenreResponse;
  error: string;
  cancel: () => void;
};

export type GameAction = {
  type: string;
  payload?: Game[] | string | (() => void | null);
};

export type GenreAction = {
  type: string;
  payload?: Genre[] | string | (() => void | null);
};

export type Dimension = {
  x: number;
  y: number;
};
