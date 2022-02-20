import {
  chakra,
  Button,
  Heading,
  HStack,
  Img,
  Flex,
  Box,
  useColorModeValue,
  Icon,
  Image,
  Tag,
  Text,
  Link,
  Grid,
  GridItem,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import { MdAdd, MdLocationOn, MdEmail } from 'react-icons/md';
import { AiOutlineLink, AiOutlineMail } from 'react-icons/ai';

import { BsFillBriefcaseFill } from 'react-icons/bs';

export default chakra(function TutorCard({ className, data }) {
  return (
    <Flex
      my='5px'
      bg={useColorModeValue('white', 'gray.800')}
      mx={{ lg: 8 }}
      w='950px'
      h='200px'
      shadow='lg'
      rounded='lg'
    >
      <Grid templateColumns='repeat(10, 1fr)' w='100%'>
        <GridItem
          colSpan={3}
          display='flex'
          flexDir='column'
          justifyContent='center'
          alignItems='center'
          p={3}
        >
          <Image src={data.photoURL} borderRadius='10px' maxH='175px' />
        </GridItem>
        <GridItem
          colSpan={7}
          display='flex'
          flexDirection='row'
          alignItems='center'
        >
          <HStack m={2} w='100%'>
            <Box pl='20px' w='100%'>
              <Heading size='md'>{data.title}</Heading>
              <Heading size='sm'>Posted by: {data.name}</Heading>
              <Heading size='sm'>Rate: {data.rate}</Heading>
              <chakra.p
                mt={4}
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                {data.description.length >= 200
                  ? `${data.description.substring(0, 190)}...`
                  : data.description}
                
               
              </chakra.p>
              <Box mt={8}>
                <HStack>
                  <Spacer />
                  <HStack
                    mt='15px'
                    justifyContent='center'
                    pr='10px'
                    spacing='15px'
                  >
                    {data.website && (
                      <Link
                        color={useColorModeValue('gray.800', 'gray.400')}
                        _hover={{
                          color: useColorModeValue('gray.700', 'gray.300'),
                        }}
                        href={
                          data.website.includes('https://')
                            ? data.website
                            : `https://${data.website}`
                        }
                        cursor='pointer'
                        isExternal
                      >
                        <AiOutlineLink />
                      </Link>
                    )}
                  </HStack>
                </HStack>
              </Box>
            </Box>
          </HStack>
        </GridItem>
      </Grid>
    </Flex>
  );
});
