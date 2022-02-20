import { filterProps } from 'framer-motion';
import React from 'react';
import NextLink from 'next/link';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

import {
  VStack,
  Box,
  Textarea,
  Alert,
  AlertIcon,
  useToast,
  Button,
  Container,
  FormControl,
  FormLabel,
  Select,
  Input,
  HStack,
  Text,
  chakra,
  Heading,
  Img,
  Spacer,
  Flex,
  Tag,
  TagLabel,
  TagCloseButton,
} from '@chakra-ui/react';
/*

{
    "clubName": "SuperStonk",
    "imgURL": "https://i.imgur.com/kFxFyYa.png",
    "website": "https://www.reddit.com/r/wallstreetbets/",
    "description": "Club to make stonks go up @UBC.",
    "university": 0,
    "email": "helloworld@gmail.com"
}*/
export default chakra(function ClubForm({ className }) {
  const [clubName, setClubName] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [website, setWebsite] = useState('');
  const [description, setDescription] = useState('');
  const [university, setUniversity] = useState('');

  const [email, setEmail] = useState('');

  const [tags, setTags] = useState([]);
  let [tagValue, setTagValue] = React.useState('');
  const [submitted, setSubmitted] = useState(false);

  const toast = useToast();

  const addTagToArr = () => {
    let tagArrTemp = [...tags];
    tagArrTemp.push(tagValue);
    setTags(tagArrTemp);
    setTagValue('');
  };

  const submitClubToDBHandler = async (e) => {
    // Handler to post club entry to mongodb
    e.preventDefault();
    let valForUni = university === 'UBC' ? 0 : 1;

    const dataForDB = {
      clubName: clubName,
      imgURL: imgURL,
      website: website,
      description: description,
      university: valForUni,
      email: email,
      tags: tags,
    };

    axios
      .post('https://campuspalsdb.herokuapp.com/clubs/add', dataForDB)
      .then((res) => {
        setSubmitted(true);
      });

    console.log(dataForDB);
  };

  return (
    <VStack>
      <FormControl isRequired>
        <HStack>
          <Container maxW='container.lg'>
            <h1>Add a new club here! </h1>
            <FormLabel htmlFor='Club-name' mt='15px'>
              Club Name
            </FormLabel>
            <Input
              id='Club-name'
              placeholder='Enter club name'
              onChange={(event) => setClubName(event.target.value)}
            />

            <FormLabel htmlFor='club-desc' mt='15px'>
              Club Description
            </FormLabel>

            <Input
              id='club-desc'
              placeholder='Enter club desciption'
              onChange={(event) => setDescription(event.target.value)}
            />

            <FormLabel htmlFor='club-uni' mt='15px'>
              Select University
            </FormLabel>
            <Select
              id='club-uni'
              defaultValue='UBC'
              onChange={(event) => setUniversity(event.target.value)}
            >
              <option>UBC</option>
              <option>SFU</option>
            </Select>

            <FormLabel htmlFor='club-website' mt='15px'>
              Website
            </FormLabel>

            <Input
              id='club-website'
              placeholder='Enter Website'
              onChange={(event) => setWebsite(event.target.value)}
            />

            <FormLabel htmlFor='imgurl' mt='15px'>
              Image
            </FormLabel>

            <Input
              id='imgurl'
              placeholder='Enter Image URL'
              onChange={(event) => setImgURL(event.target.value)}
            />

            <FormLabel htmlFor='tag' mt='15px'>
              Tags
            </FormLabel>

            <Textarea
              value={tagValue}
              onChange={(event) => setTagValue(event.target.value)}
              placeholder='Add tags'
              size='sm'
            />

            <Box mt='5px'>
              {/*TODO loop through arr of tags and display */}
              {tags.map((data, key) => {
                return (
                  <Tag
                    size='md'
                    borderRadius='full'
                    variant='solid'
                    colorScheme='telegram'
                    mx='2px'
                  >
                    <TagLabel>{data}</TagLabel>
                    <TagCloseButton
                      onClick={() => {
                        setTags(tags.filter((tag) => tag !== data));
                      }}
                    />
                  </Tag>
                );
              })}
            </Box>

            <Button
              mt='5px'
              colorScheme='green'
              onClick={() => {
                addTagToArr();
                // console.log(tags)
              }}
            >
              Add Tag
            </Button>

            {/* <Tag
              size='md'
              borderRadius='full'
              variant='solid'
              colorScheme='green'
            >
              <TagLabel>{tagValue}</TagLabel>
              <TagCloseButton />
            </Tag> */}

            <Flex w='100%' justifyContent='flex-end' mb='15px'>
              <Button
                mt={4}
                colorScheme='blue'
                type='submit'
                onClick={(e) => {
                  submitClubToDBHandler(e);
                  toast({
                    title: 'Club entry added!',
                    description:
                      "We've added your club entry to the directory.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  });
                }}
              >
                Submit
              </Button>
            </Flex>
          </Container>
        </HStack>
      </FormControl>
    </VStack>
  );
});
