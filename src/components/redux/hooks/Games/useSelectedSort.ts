import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { selectSortName } from '../../selectors';
import { endpoint } from '../../../../constants';

/**
 * Should only be used for games, as we are filtering games with this.
 */
export const useSelectedSort = (entity = endpoint.games) => {
  return useSelector((state: RootState) => selectSortName(state, entity));
};
