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
  Divider,
  Spinner,
  Image,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Checkbox,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Progress,
  CheckboxGroup,
  Img,
  Stack,
  HStack,
  Text,
} from '@chakra-ui/react';

import ClubForm from '../components/ClubForm';
import TutorForm from '../components/TutorForm';
import ClubCard from '../components/ClubCard';
import TutorCard from '../components/TutorCard';

const SFUPage = () => {
  const [clubs, setClubs] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [showClubs, setShowClubs] = useState(0); // 0 = false, 1 = true
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          'https://campuspalsdb.herokuapp.com/clubs'
        );
        console.log(response);
        setClubs(response.data);

        // tutor
        const response2 = await axios.get(
          'https://campuspalsdb.herokuapp.com/tutors'
        );
        console.log(response2);
        setTutors(response2.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // async function getClubs() {
  //   try {
  //     const response = await axios.get(
  //       'https://campuspalsdb.herokuapp.com/clubs'
  //     );
  //     console.log(response);
  //     setClubs(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <Layout uniName='sfu'>
      <Flex
        minH='calc(100vh - 60px)'
        alignItems='center'
        flexDir='column'
        backgroundColor='gray.100'
      >
        <Flex direction='column' p='15px' w='100%' h='100%'>
          {/* <HStack mx='auto' mb='20px'>
            <Img src='/sfu_logo.png' h='50px'></Img>
            <Box w='1.5px' h='45px' bgColor='#aa5c6d'></Box>
            <Heading mx='auto' color='#CC0633' mb='20px'>
              Simon Fraser University
            </Heading>
          </HStack> */}
          <Tabs isFitted variant='enclosed'>
            <TabList mb='1em'>
              <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Clubs</Tab>
              <Tab _selected={{ color: 'white', bg: 'green.400' }}>Mentors</Tab>
            </TabList>
            <TabPanels>
              <TabPanel alignItems='center' display='flex' flexDir='column'>
                {/* <Button colorScheme='teal' onClick={getClubs}>
                  View Clubs
                </Button>
                <br /> */}
                <Heading>Don't see your club listed? </Heading>
                <br />
                <Button
                  colorScheme='teal'
                  onClick={() => {
                    onOpen();
                  }}
                >
                  Add Club
                </Button>
                <br />
                <Divider orientation='horizontal' />
                <br />
                <Modal
                  blockScrollOnMount={false}
                  isOpen={isOpen}
                  onClose={onClose}
                >
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
                {/* <p>{JSON.stringify(clubs)}</p> */}
                {clubs.length === 0 ? (
                  // <Progress size='lg' w='100%' isIndeterminate />
                  <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    boxSize='100px'
                  />
                ) : (
                  clubs
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
                    })
                )}
              </TabPanel>
              <TabPanel alignItems='center' display='flex' flexDir='column'>
                <Heading>Don't see your posting/service listed? </Heading>
                <br />
                <Button
                  colorScheme='teal'
                  onClick={() => {
                    onOpen();
                  }}
                >
                  Create Posting
                </Button>
                <br />
                <Divider orientation='horizontal' />
                <br />
                <Modal
                  blockScrollOnMount={false}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>
                      {' '}
                      Add your posting to the directory!
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <TutorForm />
                    </ModalBody>
                  </ModalContent>
                </Modal>
                <br />
                {tutors.length === 0 ? (
                  // <Progress size='lg' w='100%' isIndeterminate />
                  <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    boxSize='100px'
                  />
                ) : (
                  tutors
                    ?.filter((data) => data.university == 1)
                    .sort((a, b) =>
                      a.tutors?.split('')[0]?.toLowerCase() <=
                      b.tutors?.split('')[0]?.toLowerCase()
                        ? -1
                        : 1
                    )

                    .map((data, key) => {
                      return (
                        <Box key={key}>
                          <TutorCard data={data} w='100%' />
                        </Box>
                      );
                    })
                )}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default SFUPage;
