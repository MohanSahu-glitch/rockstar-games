import { Genre } from '../types';
import { useGenres } from './redux/hooks';

const GenresList = () => {
  const { results } = useGenres();
  return (
    <ul>
      {(results as Genre[]) &&
        results.map((genre) => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  );
};

export default GenresList;
