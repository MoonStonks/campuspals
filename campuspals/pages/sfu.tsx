import { Button, Flex, Heading, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

const SFUPage = () => (
  <Layout>
    <Flex
      h='calc(100vh - 49px)'
      alignItems='center'
      flexDir='column'
      bg='red.100'
    >
      <Heading>Hello</Heading>
      <Flex direction='column' background='gray.100' p={10} rounded={6}>
        <Heading mb={2}>Simon Fraser University</Heading>
        <NextLink href='/universities'>
          <Button colorScheme='teal'>Go Back</Button>
        </NextLink>
      </Flex>
    </Flex>
  </Layout>
);

export default SFUPage;
