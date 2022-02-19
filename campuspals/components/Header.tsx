import { chakra, Button, Heading, HStack, Img, Spacer } from '@chakra-ui/react';
import { filterProps } from 'framer-motion';
import React from 'react';

import HeaderLogo from '../assets/logo.png';

// const HeaderLogo: string = require('../assets/logo.png');

export default chakra(function Header({ className }) {
  return (
    <HStack height='60px'>
      <Heading mx='20px'>CampusPals</Heading>
      <Img src={String(HeaderLogo)} h='50px'></Img>
      <Button variant='ghost'>Home</Button>
      <Button variant='ghost'>Universities</Button>
    </HStack>
  );
});
