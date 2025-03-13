import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenresList from './components/GenresList';
import PlatformsDropdown from './components/PlatformsDropdown';
import SortDropdown from './components/SortDropdown';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingY={10} paddingX={5}>
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack>
          <PlatformsDropdown />
          <SortDropdown />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
