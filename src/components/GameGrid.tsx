import { useGames } from './redux/hooks';
import { Text } from '@chakra-ui/react';

const GameGrid = () => {
  const { results, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
