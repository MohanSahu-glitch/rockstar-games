import { endpoint } from '../../../../constants';
import { Game } from '../../../../types';
import { useEntities } from '../useEntities';

/**
 * Fetches games from rawg.
 * Use this only when you need the API call, not as a single purpose for accessing state, as it might cause unnecessary renders and calls
 */
export const useGames = () => useEntities<Game>(endpoint.games);
