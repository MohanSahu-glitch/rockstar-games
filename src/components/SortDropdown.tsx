import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { sortList } from '../constants';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import { setSortName } from './redux/Entity/EntityAction';
import { useGamesState } from './redux/hooks/Games/useGamesState';

const SortDropdown = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedSort } = useGamesState();
  const selectedSortName =
    'Order By: ' + sortList.find((p) => p.value === selectedSort)?.label;
  return (
    <Box pl={4} marginTop={2}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedSortName}
        </MenuButton>
        <MenuList>
          {sortList.map((list) => (
            <MenuItem
              key={list.id}
              onClick={() => dispatch(setSortName(list.value))}
            >
              {list.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortDropdown;
