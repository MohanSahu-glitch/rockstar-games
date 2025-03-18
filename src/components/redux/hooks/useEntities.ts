import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { useCallback, useEffect, useMemo } from 'react';
import { fetchEntities } from '../Entity/EntityAction';
import {
  selectResults,
  selectIsLoading,
  selectError,
  selectGenreId,
  selectPlatformId,
  selectSortName,
  selectSearch,
} from '../selectors';

/**
 * Call the API and gets the state for the respective entities
 * Pass the endpoint suffix to be appended to the Base URL, refer api-client.ts
 */
export function useEntities<T>(entity: string) {
  const results = useSelector((state: RootState) =>
    selectResults(state, entity),
  ) as T[];
  const isLoading = useSelector((state: RootState) =>
    selectIsLoading(state, entity),
  );
  const error = useSelector((state: RootState) => selectError(state, entity));
  const selectedGenreId = useSelector((state: RootState) =>
    selectGenreId(state, entity),
  );
  const selectedPlatformId = useSelector((state: RootState) =>
    selectPlatformId(state, entity),
  );
  const selectedSort = useSelector((state: RootState) =>
    selectSortName(state, entity),
  );
  const search = useSelector((state: RootState) => selectSearch(state, entity));

  const dispatch = useDispatch<AppDispatch>();

  const fetchData = useCallback(() => {
    const params: Record<string, string> = {};

    //Setting params only when they are selected on the UI
    if (selectedGenreId) params.genres = selectedGenreId;
    if (selectedPlatformId) params.platforms = selectedPlatformId;
    if (selectedSort) params.ordering = selectedSort;
    if (search) params.search = search;

    dispatch(fetchEntities<T>(entity, { params }));
  }, [
    dispatch,
    entity,
    selectedGenreId,
    selectedPlatformId,
    selectedSort,
    search,
  ]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const retry = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return useMemo(
    () => ({ results, error, isLoading, retry }),
    [results, error, isLoading, retry],
  );
}
