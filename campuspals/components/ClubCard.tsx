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

// const data = {
//   imgUrl: 'https://go.sfss.ca/clubs/123/logo',
//   clubName: 'ACCOUNTING STUDENT ASSOCIATION - SFU',
//   website: '"www.sfuasa.com',
//   email: 'asa-exec@sfu.ca',
//   description:
//     'The SFU Accounting Student Association (ASA) is an organization made up of highly-dedicated students with the mission of assisting student towards their professional life. In order to accomplish this mission, our association provides three types of services: facilitation of information and networking, self-growth, and fellowship.',
//   tags: ['sfu', 'social', 'math'],
// };

const tags = [
  'social',
  'cultural',
  'tech',
  'wellbeing',
  'innovation',
  'health',
  'friendship',
  'club',
  'food',
  'dance',
  'sports',
  'arts',
  'science',
  'space',
];

const colorMap = {
  a: 'red',
  b: 'blue',
  c: 'green',
  d: 'orange',
  e: 'yellow',
  f: 'teal',
  g: 'purple',
  h: 'pink',
  i: 'cyan',
  j: 'gray',
  k: 'facebook',
  l: 'linkedin',
  m: 'whatsapp',
  n: 'twitter',
  o: 'red',
  p: 'blue',
  q: 'green',
  r: 'orange',
  s: 'yellow',
  t: 'teal',
  u: 'purple',
  v: 'pink',
  w: 'cyan',
  x: 'gray',
  y: 'facebook',
  z: 'linkedin',
};

export default chakra(function ClubCard({ className, data }) {
  const getTagColor = (name: string): string => {
    let char = name[0];
    return colorMap[char];
  };

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
          <Image src={data.imgURL} borderRadius='10px' maxH='175px' />
        </GridItem>
        <GridItem
          colSpan={7}
          display='flex'
          flexDirection='row'
          alignItems='center'
        >
          <HStack m={2} w='100%'>
            <Box pl='20px' w='100%'>
              <Heading size='md'>{data.clubName}</Heading>
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
                  {data.tags.map((tagName: string) => (
                    <Tag key={tagName} colorScheme={getTagColor(tagName)} borderRadius='full'>
                      {tagName}
                    </Tag>
                  ))}
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

                    {data.email && (
                      <Link
                        color={useColorModeValue('gray.800', 'gray.400')}
                        _hover={{
                          color: useColorModeValue('gray.700', 'gray.300'),
                        }}
                        cursor='pointer'
                        href={data.email}
                        isExternal
                      >
                        <AiOutlineMail />
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
