import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { usePlatforms } from './redux/hooks/Platforms/usePlatforms';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import { setPlatformId } from './redux/Entity/EntityAction';
import { useSelectedPlatformid } from './redux/hooks/Games/useSelectedPlatformId';

const PlatformsDropdown = () => {
  const { isLoading, error, results } = usePlatforms();
  const dispatch = useDispatch<AppDispatch>();
  const selectedPlatformId = useSelectedPlatformid();

  const selectedPlatformName =
    results.find((p) => String(p.id) === selectedPlatformId)?.name ||
    'Platforms';
  
  if (isLoading || error) {
    return null;
  }
  
  return (
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
  );
};

export default PlatformsDropdown;
