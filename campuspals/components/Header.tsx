import {
  chakra,
  Heading,
  HStack,
  Img,
  Flex,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';

export default chakra(function Header({ className, uniName }) {
  return (
    <HStack
      h='70px'
      className={className}
      bg={uniName ? (uniName === 'ubc' ? '#356eac' : '#df2a45') : 'gray.500'}
    >
      <HStack alignItems='center' flexDir='row' pos='absolute'>
        <Img ml='30px' src='/diversity-icon2.png' h='50' w='50'></Img>
        <Box w='10px' />
        <NextLink href='/'>
          <Heading
            ml='0'
            size='sm'
            _hover={{ cursor: 'pointer' }}
            color='whiteAlpha.900'
          >
            CampusPals
          </Heading>
        </NextLink>
        <Box w='20px' />
        <NextLink href='/universities'>
          <Box h='100%'>
            <Heading
              size='sm'
              textColor='whiteAlpha.900'
              _hover={{ cursor: 'pointer' }}
            >
              Universities
            </Heading>
          </Box>
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
        Simon Fraser University
      </Heading>
    </HStack>
  );
});

const UBCLogo = chakra(function ({ className }) {
  return (
    <HStack className={className} mx='auto'>
      <Img src='/ubc-logo.png' h='50px'></Img>
      <Heading mx='auto' color='whiteAlpha.800' mb='20px'>
        University of British Columbia
      </Heading>
    </HStack>
  );
});
