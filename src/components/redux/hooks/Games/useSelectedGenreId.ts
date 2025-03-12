import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { selectGenre } from '../../selectors';
import { endpoint } from '../../../../constants';

/**
 * Should only be used for games, as we are filtering games with this.
 */
export const useSelectedGenreId = (entity = endpoint.games) => {
  return useSelector((state: RootState) => selectGenre(state, entity));
};
