import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { GameCardProps } from '../interfaces';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

const GameCard = ({ game }: GameCardProps) => {
  //console.log(game.parent_platforms.map((platform) => platform.platform.slug)); //Debug platforms and it's slugs
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform,
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
