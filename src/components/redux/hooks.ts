import { useDispatch, useSelector } from 'react-redux';
import store, { AppDispatch, RootState } from './store';
import { useEffect } from 'react';
import { fetchEntities } from './Entity/EntityAction';
import { selectResults, selectIsLoading, selectError } from './selectors';

//Call the API and gets the state for the respective entities
export function useEntities<T>(entity: string) {
  const results = useSelector((state: RootState) =>
    selectResults(state, entity),
  ) as T[];
  const isLoading = useSelector((state: RootState) =>
    selectIsLoading(state, entity),
  );
  const error = useSelector((state: RootState) => selectError(state, entity));

  const dispatch = useDispatch<AppDispatch>();

  // Fetch the entity data when the component mounts or when entity changes
  useEffect(() => {
    dispatch(fetchEntities<T>(entity));
  }, [dispatch, entity]);

  console.log(store.getState());

  return { results, error, isLoading, dispatch };
}
