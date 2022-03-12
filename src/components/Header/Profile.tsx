import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Davi Roberto</Text>

          <Text color="gray.300" fontSize="small">
            davifsroberto@outlook.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Davi Roberto"
        src="https://github.com/davifsroberto.png"
      />
    </Flex>
  );
}
