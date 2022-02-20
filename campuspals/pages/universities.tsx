import { Button, Flex, Heading, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

const UniversitiesPage = () => (
  <Layout>
    <Flex h='calc(100vh - 60px)' alignItems='center' justifyContent='center'>
      <Flex direction='column' background='gray.100' p={10} rounded={6}>
        <Heading mb={2}>Select a University</Heading>
        <NextLink href='/sfu'>
          <Button colorScheme='blue' mb='6px'>
            SFU
          </Button>
        </NextLink>
        <NextLink href='/ubc'>
          <Button colorScheme='blue'>UBC</Button>
        </NextLink>
      </Flex>
    </Flex>
  </Layout>
);

export default UniversitiesPage;
