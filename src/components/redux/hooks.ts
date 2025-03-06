import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { useEffect } from 'react';
import { fetchGames } from './Games/GamesAction';

export function useGames() {
  const isLoading = useSelector((state: RootState) => state.game.isLoading);
  const results = useSelector(
    (state: RootState) => state.game.response.results,
  );
  const error = useSelector((state: RootState) => state.game.error);
  //const cancel = useSelector((state: RootState) => state.game.cancel); //Need to work on this, could not add abort in useEffect 😔

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return { isLoading, results, error, dispatch };
}
