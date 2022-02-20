import { Box, Button, Flex, Heading, VStack } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import NextLink from 'next/link';
import Head from 'next/head';
import Header from './Header';

type Props = {
  children?: ReactNode;
  uniName?: string;
};

const Layout = ({ children, uniName }: Props) => (
  <>
    <Header
      pos='fixed'
      w='100%'
      zIndex={10}
      mt='-70px'
      uniName={uniName}
    ></Header>
    <Box mt='70px'>{children}</Box>
  </>
);

export default Layout;
