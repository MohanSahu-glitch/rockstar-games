import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { SimpleGrid } from '@chakra-ui/react';
import { Game } from '../types';
import { useGames } from './redux/hooks/Games/useGames';
import EmptyState from './EmptyState';
import { VscError } from 'react-icons/vsc';
import { GiConsoleController } from 'react-icons/gi';

const GameGrid = () => {
  const { results, error, isLoading, retry } = useGames();

  if (error) {
    return <EmptyState message={error} imageSrc={VscError} onRetry={retry} />;
  }

  if (results.length === 0 && isLoading === false) {
    return (
      <EmptyState
        message="No results found"
        imageSrc={GiConsoleController}
        onRetry={retry}
      />
    );
  }

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {isLoading &&
          Array.from({ length: 20 }).map((_, index) => (
            <GameCardSkeleton key={index} />
          ))}
        {(results as Game[]) &&
          results.map((result) => <GameCard key={result.id} game={result} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
