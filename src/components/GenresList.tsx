import { Genre } from '../types';
import { useEntities } from './redux/hooks';

const GenresList = () => {
  const { results } = useEntities<Genre>('genres');
  return (
    <ul>
      {(results as Genre[]) &&
        results.map((genre) => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  );
};

export default GenresList;
