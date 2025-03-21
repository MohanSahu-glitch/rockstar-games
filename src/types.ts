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
  image_background: string;
};

export type Platform = {
  id: number;
  slug: string;
  name: string;
};

export type EntityResponse<T> = {
  results: T[];
  count: number;
};

export type FetchEntity<T> = {
  isLoading: boolean;
  response: EntityResponse<T>;
  error: string;
  cancel: () => void;
  selectedGenreId: string;
  selectedPlatformId: string;
  selectedSort: string;
  search: string;
  onPage: number;
};

export type EntityAction<T> = {
  type: string;
  entity: string; //Used for endpoint which concatenates with base URL. Refer api-client.ts
  payload?: string | (() => void) | number | EntityResponse<T>;
};

export type EntitiesState = Record<string, FetchEntity<unknown>>;

export type Dimension = {
  x: number;
  y: number;
};

export type SortList = {
  id: number;
  value: string;
  label: string;
};
