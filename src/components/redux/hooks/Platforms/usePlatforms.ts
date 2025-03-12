import { endpoint } from '../../../../constants';
import { Platform } from '../../../../types';
import { useEntities } from '../useEntities';

/**
 * Fetches platforms to filter games.
 * Use this only when you need the API call, not as a single purpose for accessing state, as it might cause unnecessary renders and calls
 */
export const usePlatforms = () => useEntities<Platform>(endpoint.platform);
