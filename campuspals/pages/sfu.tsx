import { Button, Flex, Heading, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

const SFUPage = () => (
  <Flex h='100vh' alignItems='center' justifyContent='center' flexDir='column'>
    <Heading>Hello</Heading>
    <Flex direction='column' background='gray.100' p={10} rounded={6}>
      <Heading mb={2}>Simon Fraser University</Heading>
      <NextLink href='/universities'>
        <Button colorScheme='teal'>Go Back</Button>
      </NextLink>
    </Flex>
  </Flex>
);

export default SFUPage;
