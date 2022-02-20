import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Flex
    minH='calc(100vh - 60px)'
    alignItems='center'
    flexDir='column'
    background='gray.700'
    backgroundImage='url("https://www.teahub.io/photos/full/248-2483376_bokeh-lights-4000-x-4000.jpg")'
    background-repeat='no-repeat'
  >
    <Flex h='100vh' alignItems='center' justifyContent='center' mx='auto'>
      <Flex
        direction='column'
        background='gray.100'
        p={12}
        rounded={6}
        mx='auto'
      >
        <Heading mb={6}>Campus Pals</Heading>
        <Text>
          Explore, Discover, and Connect. <br /> Modern Club and Tutor Directory
          Search by University{' '}
        </Text>

        <NextLink href='/universities'>
          <Button colorScheme='blue'>Get Started</Button>
        </NextLink>
      </Flex>
    </Flex>
  </Flex>
);

export default IndexPage;
