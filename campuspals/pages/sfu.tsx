import axios from 'axios';
import NextLink from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

import {
  Button,
  Flex,
  Heading,
  VStack,
  Container,
  Image,
  Text,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import ClubForm from '../components/ClubForm';
import TutorForm from '../components/TutorForm';
import ClubCard from '../components/ClubCard';

const SFUPage = () => {
  const [clubs, setClubs] = useState([]);
  const [showClubs, setShowClubs] = useState(0); // 0 = false, 1 = true
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addClub = () => {
    //
  };

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
        h='calc(100vh - 60px)'
        alignItems='center'
        flexDir='column'
        bg='red.100'
      >
        <Heading>Hello</Heading>

        {/* <TutorForm />
        <ClubForm /> */}
        <Flex direction='column' background='gray.100' p={10} rounded={6}>
          <Heading mb={2}>Simon Fraser University</Heading>
          <Button colorScheme='teal' onClick={getClubs}>
            View Clubs
          </Button>
          <br />

          <Button
            colorScheme='teal'
            onClick={() => {
              onOpen();
              addClub();
            }}
          >
            Add Club
          </Button>

          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader> Add your club to the directory!</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <ClubForm />
              </ModalBody>
            </ModalContent>
          </Modal>

          <br />
          <NextLink href='/universities'>
            <Button colorScheme='teal'>Go Back</Button>
          </NextLink>
          {/* <p>{JSON.stringify(clubs)}</p> */}
        </Flex>
        {clubs
          ?.filter((data) => data.university == 1)
          .sort((a, b) =>
            a.clubName?.split('')[0]?.toLowerCase() <=
            b.clubName?.split('')[0]?.toLowerCase()
              ? -1
              : 1
          )
          .map((data, key) => {
            return (
              <Box key={key}>
                <ClubCard data={data} w='100%' />

                {/* <Container maxW='xl' centerContent background='lightblue'>
                    <Image
                      src={data.imgURL}
                      alt={data.clubName + 'IMG'}
                      borderRadius='full'
                      boxSize='150px'
                    />
                    <Heading>{data.clubName}</Heading>{' '}
                    <Text fontSize='sm'>{data.description} </Text>
                    {data.website}
                    {data.university == 0 ? 'UBC' : 'SFU'}
                    {data.email}
                  </Container> */}
              </Box>
            );
          })}
      </Flex>
    </Layout>
  );
};

export default SFUPage;
