import {
  chakra,
  Button,
  Heading,
  HStack,
  Img,
  Spacer,
  Flex,
  Box,
} from '@chakra-ui/react';
import { filterProps } from 'framer-motion';
import React from 'react';
import NextLink from 'next/link';

import Image from 'next/image';

// const HeaderLogo: string = require('../assets/logo.png');

export default chakra(function Header({ className }) {
  return (
    <HStack h='60px' className={className}>
      <Flex alignItems='center'>
        <Img ml='30px' src='/logo.png' h='50' w='50'></Img>
        <Heading ml='0' size='sm'>
          CampusPals
        </Heading>
      </Flex>
      <Box w='30px' />
      <Button variant='ghost' textColor='gray.600'>
        Home
      </Button>
      <NextLink href='/universities'>
        <Button variant='ghost' textColor='gray.600'>
          Universities
        </Button>
      </NextLink>
    </HStack>
  );
});
