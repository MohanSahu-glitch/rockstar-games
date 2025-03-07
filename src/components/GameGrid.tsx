import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { useGames } from './redux/hooks';
import { SimpleGrid, Text } from '@chakra-ui/react';

const GameGrid = () => {
  const { results, error, isLoading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {isLoading &&
          Array.from({ length: 20 }).map((_, index) => (
            <GameCardSkeleton key={index} />
          ))}
        {results.map((result) => (
          <GameCard key={result.id} game={result} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
