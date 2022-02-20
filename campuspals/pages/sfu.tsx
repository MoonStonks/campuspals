import axios from 'axios';
import NextLink from 'next/link';
import React from 'react';
import { useEffect, useState, useMemo, useCallback } from 'react';
import Layout from '../components/Layout';
import _debounce from 'lodash/debounce';

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
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

import ClubForm from '../components/ClubForm';
import TutorForm from '../components/TutorForm';
import ClubCard from '../components/ClubCard';
import TutorCard from '../components/TutorCard';
import { BiSearchAlt2 } from 'react-icons/bi';
import Pagination from '../components/Pagination';

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

const SFUPage = () => {
  const [clubs, setClubs] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [showClubs, setShowClubs] = useState(0); // 0 = false, 1 = true
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTags, setSelectedTags] = useState([]);
  const [debouncedSearchInput, setDebouncedSearchInput] = useState('');
  const [searchVal, setSearchVal] = useState('');

  const [tabIndex, setTabIndex] = useState(0);

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

  const getFilteredResults = (rawData, search, tagList) => {
    return rawData
      .filter(
        (rawData) =>
          rawData.university === 1 &&
          rawData.clubName.toLowerCase().includes(search) &&
          (selectedTags.length
            ? rawData.tags.some((tag) => tagList.includes(tag))
            : true)
      )
      .sort((a, b) =>
        a.clubName?.split('')[0]?.toLowerCase() <=
        b.clubName?.split('')[0]?.toLowerCase()
          ? -1
          : 1
      );
  };

  const debounceFn = useCallback(_debounce(setDebouncedSearchInput, 200), []);

  const memoizedData = useMemo(
    () => getFilteredResults(clubs, debouncedSearchInput, selectedTags),
    [debouncedSearchInput, selectedTags, clubs]
  );

  useEffect(() => {
    debounceFn(searchVal.toLowerCase());
  }, [searchVal]);

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
          <Tabs
            isFitted
            variant='enclosed'
            onChange={(index) => setTabIndex(index)}
          >
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
                    {tabIndex == 0 ? (
                      <ModalHeader>
                        {' '}
                        Add your club to the directory!
                      </ModalHeader>
                    ) : (
                      <ModalHeader>
                        {' '}
                        Add your posting to the directory!
                      </ModalHeader>
                    )}

                    <ModalCloseButton />
                    <ModalBody>
                      {tabIndex == 0 ? <ClubForm /> : <TutorForm />}
                    </ModalBody>
                  </ModalContent>
                </Modal>
                <br />
                {clubs.length === 0 ? (
                  <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    boxSize='100px'
                  />
                ) : (
                  <>
                    {/* <Flex direction='row' p='15px' pos='sticky' left={0}> */}
                    <Flex
                      flexDir='row'
                      border='100px'
                      backgroundColor='white'
                      boxShadow='0px 20px 40px rgba(0, 0, 0, 0.2)'
                      borderRadius='10px'
                      pos='sticky'
                      top='90px'
                      alignSelf='flex-start'
                      // mt='150px'
                      w='240px'
                    >
                      <Box m='20px' w='100%'>
                        <InputGroup mb='30px'>
                          <InputLeftElement
                            pointerEvents='none'
                            children={<BiSearchAlt2 color='gray.300' />}
                          />
                          <Input
                            type='tel'
                            placeholder='Search clubs'
                            value={searchVal}
                            onChange={(e) => setSearchVal(e.target.value)}
                          />
                        </InputGroup>
                        <CheckboxGroup
                          colorScheme='green'
                          onChange={setSelectedTags}
                        >
                          <Stack>
                            {tags.map((tag) => (
                              <Checkbox key={tag} value={tag} size='md'>
                                {tag}
                              </Checkbox>
                            ))}
                          </Stack>
                        </CheckboxGroup>
                      </Box>
                    </Flex>
                    {/* </Flex> */}
                    <Pagination itemsPerPage={10} data={memoizedData} />
                  </>
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
