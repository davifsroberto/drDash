import dynamic from 'next/dynamic';

import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { ApexOptionsHelper } from './helpers/dashboard.helper';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const series = [{ name: 'series-1', data: [31, 40, 28, 51, 42, 109, 100] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" mx="auto" my="6" px="6" maxWidth={1480}>
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignContent="flex-start"
        >
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Week Subscriptions
            </Text>

            <Chart
              type="area"
              height={160}
              options={ApexOptionsHelper()}
              series={series}
            />
          </Box>
        </SimpleGrid>

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignContent="flex-start"
        >
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Opening
            </Text>

            <Chart
              type="area"
              height={160}
              options={ApexOptionsHelper()}
              series={series}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
