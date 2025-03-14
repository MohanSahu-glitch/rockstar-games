import { SortList } from './types';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const CANCEL = 'CANCEL';
export const SELECT_GENRE = 'SELECT_GENRE';
export const SELECT_PLATFORM = 'SELECT_PLATFORM';
export const SELECT_SORT = 'SELECT_SORT';

export enum endpoint {
  games = 'games',
  genres = 'genres',
  platform = 'platforms/lists/parents',
}

export const sortList: SortList[] = [
  { id: 1, value: '', label: 'Relevance' },
  { id: 2, value: 'name', label: 'Name' },
  { id: 3, value: '-added', label: 'Date Added' },
  { id: 4, value: '-released', label: 'Date Released' },
  { id: 5, value: '-metacritic', label: 'Popularity' },
  { id: 6, value: '-rating', label: 'Average Rating' },
];
