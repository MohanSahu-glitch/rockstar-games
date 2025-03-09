import { useGenres } from './redux/hooks';

const GenresList = () => {
  const { results } = useGenres();
  return (
    <ul>
      {results.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
