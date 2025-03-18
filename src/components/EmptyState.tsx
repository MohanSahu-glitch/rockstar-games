import { Box, Button, Icon, Text } from '@chakra-ui/react';
import { EmptyStateProps } from '../interfaces';
import { MdErrorOutline } from 'react-icons/md';

const EmptyState = ({
  message = 'Something went wrong',
  imageSrc = MdErrorOutline,
  onRetry,
}: EmptyStateProps) => {
  return (
    <Box
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      minW="500px"
      p={8}
      textAlign="center"
      border="2px dotted gray"
      borderRadius="lg"
      boxShadow="lg"
      bg="gray.800"
      marginTop="-75px"
    >
      <Icon as={imageSrc} boxSize={14} color="gray.400" />
      <Text mt={4} fontSize="2xl" fontWeight="bold" color="gray.300">
        {message}
      </Text>
      {onRetry && (
        <Button mt={4} colorScheme="blue" size="lg" onClick={onRetry}>
          Retry
        </Button>
      )}
    </Box>
  );
};

export default EmptyState;
