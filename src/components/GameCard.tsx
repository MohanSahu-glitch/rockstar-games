import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { GameCardProps } from '../interfaces';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import { getCroppedImageUrl } from '../helpers';

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image
        src={getCroppedImageUrl(game.background_image, { x: 600, y: 400 })}
      />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={
              game.parent_platforms?.map((platform) => platform.platform) || []
            }
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
