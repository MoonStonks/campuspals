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
        (data) =>
          data.university === 1 &&
          data.clubName.toLowerCase().includes(search) &&
          (selectedTags.length
            ? data.tags.some((tag) => tagList.includes(tag))
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

  const searchHandler = (e) => setSearchVal(e.target.value);

  return (
    <Layout>
      <Flex
        h='calc(100vh - 60px)'
        alignItems='center'
        //   bg='blue.100'
        flexDir='column'
      >
        <Flex direction='column' p='15px' w='100%' h='100%'>
          <HStack mx='auto' mb='20px'>
            <Img src='/ubc-logo.png' h='50px'></Img>
            <Box w='1.5px' h='45px' bgColor='#5e7084'></Box>
            <Heading mx='auto' color='#002145' mb='20px'>
              University of British Columbia
            </Heading>
          </HStack>
          <Tabs isFitted variant='enclosed'>
            <TabList mb='1em'>
              <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Clubs</Tab>
              <Tab _selected={{ color: 'white', bg: 'green.400' }}>Mentors</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>Clubs</p>
                {/* <ClubCard /> */}
              </TabPanel>
              <TabPanel>
                <p>Mentors</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <CheckboxGroup colorScheme='green' onChange={setSelectedTags}>
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
              {tags.map((tag) => (
                <Checkbox key={tag} value={tag}>
                  {tag}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<BiSearchAlt2 color='gray.300' />}
            />
            <Input
              type='tel'
              placeholder='Search clubs'
              value={searchVal}
              onChange={searchHandler}
            />
          </InputGroup>
          <Pagination itemsPerPage={5} />
          {memoizedData.map((item, i) => (
            <ClubCard key={`${item.clubName}-${i}`} data={item} />
          ))}
        </Flex>
      </Flex>
    </Layout>
  );
};

export default UBCPage;
