import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import { Genre } from '../types';
import { useGames, useGenres } from './redux/hooks';
import { getCroppedImageUrl } from '../helpers';
import { selectGenreId } from './redux/Entity/EntityAction';

const GenresList = () => {
  const { results, isLoading, error } = useGenres();
  const { dispatch } = useGames();

  if (isLoading) {
    return <Spinner size="xl" />;
  }
  if (error) {
    return null;
  }
  return (
    <List>
      {(results as Genre[]) &&
        results.map((genre) => (
          <ListItem
            key={genre.id}
            paddingY="5px"
            borderRadius="md"
            cursor="pointer"
            _hover={{ bg: 'gray.500', transition: '0.2s' }}
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
                variant="unstyled"
                onClick={() => dispatch(selectGenreId(String(genre.id)))}
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
