import { Button, Flex, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Flex h='100vh' alignItems='center' justifyContent='center'>
    <Flex direction='column' background='gray.100' p={12} rounded={6}>
      <Heading mb={6}>Campus Pals</Heading>
      <NextLink href='/universities'>
        <Button colorScheme='blue'>Get Started</Button>
      </NextLink>
    </Flex>
  </Flex>
);

export default IndexPage;
