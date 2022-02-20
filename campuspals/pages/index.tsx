import { Button, Flex, Heading, Text, Img } from '@chakra-ui/react';
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
        justifyContent='center'
        alignItems='center'
      >
        <Img src='/diversity-icon2.png' h='50' w='50'></Img>
        <Heading mb={6}>CampusPals</Heading>
        <Text textAlign='center' fontSize='lg' alignItems='center'>
          Explore, Discover, and Connect. <br /> Search for Clubs and Tutors at
          your University{' '}
        </Text>
        <br />

        <NextLink href='/universities'>
          <Button colorScheme='blue'>Explore</Button>
        </NextLink>
      </Flex>
    </Flex>
  </Flex>
);

export default IndexPage;
