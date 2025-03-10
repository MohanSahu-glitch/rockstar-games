import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import { Genre } from '../types';
import { useGenres } from './redux/hooks';
import { getCroppedImageUrl } from '../helpers';

const GenresList = () => {
  const { results } = useGenres();
  return (
    <List>
      {(results as Genre[]) &&
        results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
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
