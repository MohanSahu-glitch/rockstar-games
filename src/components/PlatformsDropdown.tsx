import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { usePlatforms } from './redux/hooks/Platforms/usePlatforms';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import { setPlatformId } from './redux/Entity/EntityAction';
import { useGamesState } from './redux/hooks/Games/useGamesState';

const PlatformsDropdown = () => {
  const { isLoading, error, results } = usePlatforms();
  const dispatch = useDispatch<AppDispatch>();
  const { selectedPlatformId } = useGamesState();

  const selectedPlatformName =
    results.find((p) => String(p.id) === selectedPlatformId)?.name ||
    'Platforms';

  if (isLoading || error) {
    return null;
  }

  return (
    <Box pl={38} marginTop={2}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatformName}
        </MenuButton>
        <MenuList>
          {results.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => dispatch(setPlatformId(String(platform.id)))}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformsDropdown;
