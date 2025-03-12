import { endpoint } from '../../../../constants';
import { Genre } from '../../../../types';
import { useEntities } from '../useEntities';

/**
 * Fetches genres for filtering games.
 * Use this only when you need the API call, not as a single purpose for accessing state, as it might cause unnecessary renders and calls
 */
export const useGenres = () => useEntities<Genre>(endpoint.genres);
