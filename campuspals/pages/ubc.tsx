import {
  Button,
  Flex,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import ClubCard from '../components/ClubCard';
import Layout from '../components/Layout';

const UBCPage = () => (
  <Layout>
    <Flex
      h='calc(100vh - 60px)'
      alignItems='center'
      //   bg='blue.100'
      flexDir='column'
    >
      <Flex direction='column' p='15px' w='100%' h='100%'>
        <Heading mx='auto' color='blue.700' mb='20px'>
          University of British Columbia
        </Heading>
        <Tabs isFitted variant='enclosed'>
          <TabList mb='1em'>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Clubs</Tab>
            <Tab _selected={{ color: 'white', bg: 'green.400' }}>Mentors</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Clubs</p>
              {/* <ClubCard /> */}
            </TabPanel>
            <TabPanel>
              <p>Mentors</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  </Layout>
);

export default UBCPage;
