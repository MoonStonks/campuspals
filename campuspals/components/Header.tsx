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
      h='60px'
      className={className}
      bg={uniName ? (uniName === 'ubc' ? '#7aa6d6' : 'red.100') : 'gray.100'}
    >
      <Flex alignItems='center'>
        <Img ml='30px' src='/diversity-icon2.png' h='50' w='50'></Img>

        <NextLink href='/'>
          <Heading ml='0' size='sm'>
            CampusPals
          </Heading>
        </NextLink>
      </Flex>
      <Box w='30px' />
      {/* <Button variant='ghost' textColor='gray.600'>
        Home
      </Button> */}
      <NextLink href='/universities'>
        <Button variant='ghost' textColor='gray.600'>
          Universities
        </Button>
      </NextLink>

      <Flex pos='absolute' left='30%'>
        {uniName ? uniName === 'ubc' ? <UBCLogo /> : <SFULogo /> : null}
      </Flex>
    </HStack>
  );
});

const SFULogo = chakra(function ({ className }) {
  return (
    <HStack className={className} mx='auto'>
      <Img src='/sfu_logo.png' h='50px'></Img>
      <Box w='1.5px' h='45px' bgColor='#aa5c6d'></Box>
      <Heading mx='auto' color='#CC0633' mb='20px'>
        Simon Fraser University
      </Heading>
    </HStack>
  );
});

const UBCLogo = chakra(function ({ className }) {
  return (
    <HStack className={className} mx='auto'>
      <Img src='/ubc-logo.png' h='50px'></Img>
      <Box w='1.5px' h='45px' bgColor='#5e7084'></Box>
      <Heading mx='auto' color='#002145' mb='20px'>
        University of British Columbia
      </Heading>
    </HStack>
  );
});
