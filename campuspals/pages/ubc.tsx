import {
  Button,
  Flex,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  CheckboxGroup,
  Stack,
  Checkbox,
  InputLeftElement,
  InputGroup,
  Input,
  HStack,
  Box,
  Img,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import ClubCard from '../components/ClubCard';
import Layout from '../components/Layout';
import { BiSearchAlt2 } from 'react-icons/bi';
import axios from 'axios';
import _debounce from 'lodash/debounce';
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

const UBCPage = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [debouncedSearchInput, setDebouncedSearchInput] = useState('');
  const [searchVal, setSearchVal] = useState('');
  const [data, setData] = useState([]);

  const debounceFn = useCallback(_debounce(setDebouncedSearchInput, 200), []);

  const getFilteredResults = (rawData, search, tagList) => {
    return rawData
      .filter(
        (rawData) =>
          rawData.university === 0 &&
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

  const memoizedData = useMemo(
    () => getFilteredResults(data, debouncedSearchInput, selectedTags),
    [debouncedSearchInput, selectedTags, data]
  );

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          'https://campuspalsdb.herokuapp.com/clubs'
        );
        setData(response.data);
        console.log('hi');
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    debounceFn(searchVal.toLowerCase());
  }, [searchVal]);

  return (
    <Layout uniName='ubc'>
      <Flex
        minH='calc(100vh - 60px)'
        alignItems='center'
        flexDir='column'
        backgroundColor='gray.100'
      >
        <Flex direction='column' p='15px' w='100%' h='100%'>
          {/* <HStack mx='auto' mb='20px'>
            <Img src='/ubc-logo.png' h='50px'></Img>
            <Box w='1.5px' h='45px' bgColor='#5e7084'></Box>
            <Heading mx='auto' color='#002145' mb='20px'>
              University of British Columbia
            </Heading>
          </HStack> */}
          <Tabs isFitted variant='enclosed'>
            <TabList mb='1em'>
              <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Clubs</Tab>
              <Tab _selected={{ color: 'white', bg: 'green.400' }}>Mentors</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {' '}
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
                <Pagination itemsPerPage={10} data={memoizedData} />
              </TabPanel>
              <TabPanel></TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default UBCPage;
