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
  VStack,
  Spacer,
  IconButton,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import NextLink from 'next/link';
import { MdAdd, MdLocationOn, MdEmail } from 'react-icons/md';
import { AiOutlineLink, AiOutlineMail } from 'react-icons/ai';

import { BsFillBriefcaseFill } from 'react-icons/bs';
import CommentBox from './CommentBox';

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

export default chakra(function ClubPage({ className, data }) {
  const getTagColor = (name: string): string => {
    let char = name[0];
    return colorMap[char];
  };

  return (
    <>
      {Object.keys(data).length && (
        <Box w='100%'>
          <VStack>
            <Image
              src={data.imgURL as string}
              borderRadius='10px'
              maxH='175px'
              mx='auto'
              mt='30px'
            />
            <Heading mx='auto'>{data.clubName}</Heading>
            {data.tags && (
              <HStack>
                {(data.tags as any).map((tagName: string) => (
                  <Tag
                    key={tagName}
                    colorScheme={getTagColor(tagName)}
                    borderRadius='full'
                  >
                    {tagName}
                  </Tag>
                ))}
              </HStack>
            )}

            <Box w='600px'>
              <Text textAlign='center'>{data.description}</Text>
            </Box>

            <HStack pt='15px' justifyContent='center' spacing='10px'>
              {data.website && (
                <Link href={data.website}>
                  <IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Send email'
                    icon={<AiOutlineLink />}
                  />
                </Link>
              )}
              {data.email && (
                <Link href={data.email}>
                  <IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Send email'
                    icon={<AiOutlineMail />}
                  />
                </Link>
              )}
            </HStack>
            <CommentBox
              pt='30px'
              club={data.clubName.replaceAll(' ', '')}
              url={window.location.href}
            />
          </VStack>
        </Box>
      )}
    </>
  );
});
