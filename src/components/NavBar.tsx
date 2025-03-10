import { HStack, Image } from '@chakra-ui/react';
import rockstar from '../assets/rockstar.webp';
import ToggleTheme from './ToggleTheme';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='15px'>
          <Image src={rockstar} boxSize='60px' />
          <ToggleTheme />
    </HStack>
  )
}

export default NavBar;