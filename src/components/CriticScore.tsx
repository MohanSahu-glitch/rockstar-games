import { Badge } from '@chakra-ui/react';
import { CriticScoreProps } from '../interfaces';

const CriticScore = ({ score }: CriticScoreProps) => {
  const color = score > 88 ? 'green' : 'red';
  return (
    <Badge colorScheme={color} paddingX={2} fontSize="14px" borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;