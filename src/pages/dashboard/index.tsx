import dynamic from 'next/dynamic';

import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { ApexOptionsHelper, series } from './configChart';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

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
          <Box p={['4', '8']} bg="gray.800" borderRadius={8}>
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

          <Box p={['4', '8']} bg="gray.800" borderRadius={8}>
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
