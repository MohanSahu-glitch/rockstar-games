import { HStack, Image } from '@chakra-ui/react';
import rockstar from '../assets/rockstar.webp';

const NavBar = () => {
  return (
    <HStack>
          <Image src={ rockstar } boxSize='60px'/>
    </HStack>
  )
}

export default NavBar;