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
