import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import { Genre } from '../types';
import { getCroppedImageUrl } from '../helpers';
import { setGenreId } from './redux/Entity/EntityAction';
import { useGenres } from './redux/hooks/Genres/useGenres';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import { useSelectedGenreId } from './redux/hooks/Games/useSelectedGenreId';

const GenresList = () => {
  const { results, isLoading, error } = useGenres();
  const selectedGenreId = useSelectedGenreId();
  const dispatch = useDispatch<AppDispatch>();

  if (isLoading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return null;
  }

  return (
    <List pt={10}>
      {(results as Genre[]) &&
        results.map((genre) => (
          <ListItem
            key={genre.id}
            paddingY="5px"
            borderRadius="md"
            cursor="pointer"
          >
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background, {
                  x: 600,
                  y: 400,
                })}
              />
              <Button
                fontSize="lg"
                variant="outline"
                onClick={() => dispatch(setGenreId(String(genre.id)))}
                fontWeight={
                  genre.id === Number(selectedGenreId) ? 'bold' : 'thin'
                }
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GenresList;
