import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { useEffect, useMemo } from 'react';
import { fetchEntities } from './Entity/EntityAction';
import {
  selectResults,
  selectIsLoading,
  selectError,
  selectGenre,
} from './selectors';
import { Game, Genre } from '../../types';

//Call the API and gets the state for the respective entities
function useEntities<T>(entity: string) {
  const results = useSelector((state: RootState) =>
    selectResults(state, entity),
  ) as T[];
  const isLoading = useSelector((state: RootState) =>
    selectIsLoading(state, entity),
  );
  const error = useSelector((state: RootState) => selectError(state, entity));
  const selectedGenreId = useSelector((state: RootState) =>
    selectGenre(state, entity),
  );

  const dispatch = useDispatch<AppDispatch>();

  // Fetch the entity data when the component mounts or when entity changes
  useEffect(() => {
    const params: Record<string, string> = {};
    //Setting params only when genre is selected
    if (selectedGenreId) {
      params.genres = selectedGenreId;
    }
    dispatch(fetchEntities<T>(entity, { params }));
  }, [dispatch, entity, selectedGenreId]);

  return useMemo(
    () => ({ results, error, isLoading, selectedGenreId, dispatch }),
    [results, error, isLoading, selectedGenreId, dispatch],
  );
}

export const useGames = () => useEntities<Game>('games');
export const useGenres = () => useEntities<Genre>('genres');
