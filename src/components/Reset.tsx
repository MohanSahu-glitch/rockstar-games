import { Box, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import {
  setGenreId,
  setPlatformId,
  setSortName,
} from './redux/Entity/EntityAction';

const Reset = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(setGenreId(''));
    dispatch(setPlatformId(''));
    dispatch(setSortName(''));
  };
  return (
    <Box pl={38} marginTop={3}>
      <Button variant="outline" size="xs" onClick={handleClick}>
        Reset All
      </Button>
    </Box>
  );
};

export default Reset;
