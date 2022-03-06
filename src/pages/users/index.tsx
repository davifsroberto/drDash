import {
  Box,
  Button,
  Checkbox,
  Flex,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import { Header } from '../../components/Header';
import { TitlePage } from '../../components/Header/TitlePage';
import { Pagination } from '../../components/Paginator';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" mx="auto" my="6" px="6" maxWidth={1480}>
        <Sidebar />

        <Box flex="1" bg="gray.800" p="8" borderRadius={8}>
          <Flex mb="8" justify="space-between" align="center">
            <TitlePage title="Users" />

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              New User
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr px="6" color="gray.300" width="8">
                <Th>
                  <Checkbox colorScheme="pink" />
                </Th>

                <Th>User</Th>

                <Th>Created Date</Th>

                <Th width="8"></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Davi Roberto</Text>

                    <Text fontSize="sm" color="gray.300">
                      davifsroberto@outlook.com
                    </Text>
                  </Box>
                </Td>

                <Td>2020-03-06</Td>

                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Edit
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
