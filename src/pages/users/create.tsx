import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Input } from '../../components/Form/Input';
import { TitlePage } from '../../components/Header/TitlePage';

export default function UserCreate() {
  return (
    <Box>
      <Header />

      <Flex w="100%" mx="auto" my="6" px="6" maxWidth={1480}>
        <Sidebar />

        <Box flex="1" bg="gray.800" p={['6', '8']} borderRadius={8}>
          <TitlePage title="Users" />

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input name="name" label="Fullname" />

              <Input name="email" label="E-mail" type="email" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input name="password" label="Password" type="password" />

              <Input
                name="password_confirm"
                label="Confirm Password"
                type="password"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancel</Button>

              <Button colorScheme="pink">Create</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
