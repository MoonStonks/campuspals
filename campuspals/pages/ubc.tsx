import { Button, Flex, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

const UBCPage = () => (
  <Layout>
    <Flex h='calc(100vh - 49px)' alignItems='center' bg='blue.100'>
      <Flex direction='column' background='gray.100' p={10} rounded={6}>
        <Heading mb={2}>University of British Columbia</Heading>
        <NextLink href='/universities'>
          <Button colorScheme='teal'>Go Back</Button>
        </NextLink>
      </Flex>
    </Flex>
  </Layout>
);

export default UBCPage;
