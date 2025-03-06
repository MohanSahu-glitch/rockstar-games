import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { GameCardProps } from '../interfaces';
import PlatformIconList from './PlatformIconList';

const GameCard = ({ game }: GameCardProps) => {
  //console.log(game.parent_platforms.map((platform) => platform.platform.slug)); //Debug platforms and it's slugs
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((platform) => platform.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
