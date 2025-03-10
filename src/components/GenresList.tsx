import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import { Genre } from '../types';
import { useGenres } from './redux/hooks';
import { getCroppedImageUrl } from '../helpers';

const GenresList = () => {
  const { results, isLoading, error } = useGenres();

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
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GenresList;
