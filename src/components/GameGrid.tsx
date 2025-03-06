import { useEffect } from "react";
import { useGames } from "./redux/hooks";
import { fetchGames } from "./redux/Games/GamesAction";
import { Text } from "@chakra-ui/react";


const GameGrid = () => {

  const { results, error, dispatch } = useGames();
    useEffect(() => {
      dispatch(fetchGames());
    }, [dispatch])

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
}

export default GameGrid;