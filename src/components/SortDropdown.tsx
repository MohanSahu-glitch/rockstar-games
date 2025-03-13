import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortDropdown = () => {
  return (
    <Box pl={4} marginTop={2}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Sort
        </MenuButton>
        <MenuList>
          <MenuItem>Date Released</MenuItem>
          <MenuItem>Popularity</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortDropdown;
