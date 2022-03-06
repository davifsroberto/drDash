import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text
      fontSize="3xl"
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
      _after={{ content: '"."', color: 'pink.500' }}
    >
      drDash
    </Text>
  );
}
