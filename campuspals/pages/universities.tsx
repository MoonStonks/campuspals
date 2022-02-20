import { Button, Flex, Heading, Img } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

const UniversitiesPage = () => (
  <Layout>
    <Flex
      h='calc(100vh - 70px)'
      alignItems='center'
      justifyContent='center'
      flexDir='column'
      background='gray.700'
    >
      <Img src='/university-vector.svg' h='300px' mb='20px'></Img>
      <Flex direction='column' background='gray.100' p='50px' rounded='20px'>
        <Heading mb={2}>Select a University</Heading>
        <NextLink href='/sfu'>
          <Button colorScheme='red' mb='6px'>
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
