/**
 * Uses npm's reselect
 * Reselect provides a function called createSelector to generate memoized selectors.
 * createSelector accepts one or more "input selector" functions, plus an "output selector" function, and returns a new selector function for you to use.
 */

import { createSelector } from 'reselect';
import { RootState } from './store';

/**
 * Base selector: Gets the entity state from Redux
 */
const selectEntityState = createSelector(
  (state: RootState) => state, // Root state
  (_: RootState, entity: string) => entity, // Entity name
  (state, entity) => state[entity] || {}, // Ensure memoization
);

/**
 * Memoized selector: Extracts the results array
 */
export const selectResults = createSelector(
  [selectEntityState], // Memoized input selector
  (entityState) => entityState?.response?.results ?? [],
);

/**
 * Memoized selector: Extracts the count of the response
 */
export const selectCount = createSelector(
  [selectEntityState], // Memoized input selector
  (entityState) => entityState?.response?.count ?? 0,
);

/**
 * Memoized selector: Extracts the loading state
 */
export const selectIsLoading = createSelector(
  [selectEntityState],
  (entityState) => entityState?.isLoading,
);

/**
 * Memoized selector: Extracts the error state
 */
export const selectError = createSelector(
  [selectEntityState],
  (entityState) => entityState?.error,
);

/**
 * Memoized selector: Extracts the selected genre id
 */
export const selectGenreId = createSelector(
  [selectEntityState],
  (entityState) => entityState?.selectedGenreId ?? '',
);

/**
 * Memoized selector: Extracts the selected genre id
 */
export const selectPlatformId = createSelector(
  [selectEntityState],
  (entityState) => entityState?.selectedPlatformId ?? '',
);

/**
 * Memoized selector: Extracts the selected sort name
 */
export const selectSortName = createSelector(
  [selectEntityState],
  (entityState) => entityState?.selectedSort ?? '',
);

/**
 * Memoized selector: Extracts the selected search name
 */
export const selectSearch = createSelector(
  [selectEntityState],
  (entityState) => entityState?.search ?? '',
);

/**
 * Memoized selector: Extracts the selected page number
 */
export const selectOnPage = createSelector(
  [selectEntityState],
  (entityState) => entityState?.onPage ?? 1,
);
