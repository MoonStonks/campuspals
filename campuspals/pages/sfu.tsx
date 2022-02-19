import { Button, Flex, Heading, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';

const SFUPage = () => {
  const [clubs, setClubs] = useState([]);
  const [showClubs, setShowClubs] = useState(0); // 0 = false, 1 = true

  async function getClubs() {
    try {
      const response = await axios.get(
        'https://campuspalsdb.herokuapp.com/clubs'
      );
      console.log(response);
      setClubs(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <Flex
        h='calc(100vh - 49px)'
        alignItems='center'
        flexDir='column'
        bg='red.100'
      >
        <Heading>Hello</Heading>
        <Flex direction='column' background='gray.100' p={10} rounded={6}>
          <Heading mb={2}>Simon Fraser University</Heading>
          <Button colorScheme='teal' onClick={getClubs}>
            View Clubs
          </Button>
          <br />
          <NextLink href='/universities'>
            <Button colorScheme='teal'>Go Back</Button>
          </NextLink>
          {/* <p>{JSON.stringify(clubs)}</p> */}
          <div>
            {clubs
              ?.filter((data) => data.university == 1)
              .map((data, key) => {
                return <div key={key}>{data.clubName} </div>;
              })}
          </div>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default SFUPage;
