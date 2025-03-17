import { HStack, Image, Box, Flex } from '@chakra-ui/react';
import rockstar from '../assets/rockstar.webp';
import ToggleTheme from './ToggleTheme';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <HStack padding="15px" width="100%" wrap="wrap">
      <Image src={rockstar} boxSize="60px" />

      {/* Flexbox for alignment */}
      <Flex
        flex="1"
        justifyContent={{ base: 'center', md: 'center' }}
        px={{ base: 2, md: 10 }}
      >
        <Box width={{ base: '100%', md: '600px', lg: '700px' }}>
          <SearchBar />
        </Box>
      </Flex>

      <ToggleTheme />
    </HStack>
  );
};

export default NavBar;
