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

export default chakra(function Header({ className, uniName }) {
  return (
    <HStack
      h='70px'
      className={className}
      bg={uniName ? (uniName === 'ubc' ? '#356eac' : '#df2a45') : 'gray.100'}
    >
      <HStack alignItems='center' flexDir='row' pos='absolute'>
        <Img ml='30px' src='/diversity-icon2.png' h='50' w='50'></Img>
        <Box w='10px' />
        <NextLink href='/'>
          <Heading ml='0' size='sm' _hover={{ cursor: 'pointer' }}>
            CampusPals
          </Heading>
        </NextLink>
        <Box w='20px' />
        <NextLink href='/universities'>
          <Button variant='ghost' textColor='gray.800'>
            Universities
          </Button>
        </NextLink>
      </HStack>

      {/* <Box w='30px' /> */}

      <Flex w='100%'>
        {uniName ? uniName === 'ubc' ? <UBCLogo /> : <SFULogo /> : null}
      </Flex>
    </HStack>
  );
});

const SFULogo = chakra(function ({ className }) {
  return (
    <HStack className={className} mx='auto'>
      <Img src='/sfu_logo.png' h='50px'></Img>
      <Heading mx='auto' color='whiteAlpha.900' mb='20px'>
        {/* '#CC0633' */}
        Simon Fraser University
      </Heading>
    </HStack>
  );
});

const UBCLogo = chakra(function ({ className }) {
  return (
    <HStack className={className} mx='auto'>
      <Img src='/ubc-logo.png' h='50px'></Img>
      {/* <Box w='1.5px' h='45px' bgColor='gray.500'></Box> */}
      <Heading mx='auto' color='whiteAlpha.800' mb='20px'>
        University of British Columbia
      </Heading>
    </HStack>
  );
});
