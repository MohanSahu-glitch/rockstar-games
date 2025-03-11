import { createSelector } from 'reselect';
import { RootState } from './store';

// Base selector: Gets the entity state from Redux
const selectEntityState = (state: RootState, entity: string) =>
  state[entity] || {};

// Memoized selector: Extracts the results array
export const selectResults = createSelector(
  selectEntityState, // Input selector: Gets the entity state
  (entityState) => entityState?.response?.results || [], // Output selector: Returns results
);

// Memoized selector: Extracts the loading state
export const selectIsLoading = createSelector(
  selectEntityState,
  (entityState) => entityState?.isLoading,
);

// Memoized selector: Extracts the error state
export const selectError = createSelector(
  selectEntityState,
  (entityState) => entityState?.error,
);

// Memoized selector: Extracts the genre state
export const selectGenre = createSelector(
  selectEntityState,
  (entityState) => entityState?.selectedGenreId,
);

/**
 * Reselect provides a function called createSelector to generate memoized selectors.
 * createSelector accepts one or more "input selector" functions, plus an "output selector" function, and returns a new selector function for you to use.
 */
