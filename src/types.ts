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

export type EntityResponse<T> = {
  results: T[];
};

export type FetchEntity<T> = {
  isLoading: boolean;
  response: EntityResponse<T>;
  error: string;
  cancel: () => void;
};

export type EntityAction<T> = {
  type: string;
  entity: string; //Used for endpoint which concatenates with base URL. Refer api-client.ts
  payload?: T[] | string | (() => void);
};

export type EntitiesState = Record<string, FetchEntity<unknown>>;

export type Dimension = {
  x: number;
  y: number;
};
