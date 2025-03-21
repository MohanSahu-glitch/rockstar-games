import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  selectCount,
  selectError,
  selectGenreId,
  selectIsLoading,
  selectOnPage,
  selectPlatformId,
  selectResults,
  selectSearch,
  selectSortName,
} from '../../selectors';
import { endpoint } from '../../../../constants';
import { Game } from '../../../../types';

/**
 * Only returns data inside games state.
 * Does not trigger an API call like useGames.
 */
export const useGamesState = () => {
  const results = useSelector(
    (state: RootState) => selectResults(state, endpoint.games) as Game[],
  );
  const count = useSelector((state: RootState) =>
    selectCount(state, endpoint.games),
  );
  const isLoading = useSelector((state: RootState) =>
    selectIsLoading(state, endpoint.games),
  );
  const error = useSelector((state: RootState) =>
    selectError(state, endpoint.games),
  );
  const selectedGenreId = useSelector((state: RootState) =>
    selectGenreId(state, endpoint.games),
  );
  const selectedPlatformId = useSelector((state: RootState) =>
    selectPlatformId(state, endpoint.games),
  );
  const selectedSort = useSelector((state: RootState) =>
    selectSortName(state, endpoint.games),
  );
  const search = useSelector((state: RootState) =>
    selectSearch(state, endpoint.games),
  );
  const onPage = useSelector((state: RootState) =>
    selectOnPage(state, endpoint.games),
  );

  return {
    results,
    count,
    isLoading,
    error,
    selectedGenreId,
    selectedPlatformId,
    selectedSort,
    search,
    onPage,
  };
};
