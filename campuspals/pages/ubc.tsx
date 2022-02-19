import { Button, Flex, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

const UBCPage = () => (
  <Flex h='100vh' alignItems='center' justifyContent='center'>
    <Flex direction='column' background='gray.100' p={10} rounded={6}>
      <Heading mb={2}>University of British Columbia</Heading>
      <NextLink href='/universities'>
        <Button colorScheme='teal'>Go Back</Button>
      </NextLink>
    </Flex>
  </Flex>
);

export default UBCPage;
