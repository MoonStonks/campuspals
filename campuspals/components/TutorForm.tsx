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
    "title": "UBC Math Tutoring MATH200/221",
    "name": "UltimateTutor123",
    "description": "Available to tutor all MATH2XX level courses for UBC.",
    "website": "example.com",
    "rate": "30/hr CAD",
    "photoURL": "https://i.imgur.com/Tk6jIxy.jpg",
    "university": 0
    
}


*/
export default chakra(function TutorForm({ className }) {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [rate, setRate] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [university, setUniversity] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const toast = useToast();

  const submitTutorToDBHandler = async (e) => {
    // Handler to post club entry to mongodb
    e.preventDefault();
    let valForUni = university === 'UBC' ? 0 : 1;

    const dataForDB = {
      title: title,
      name: name,
      website: website,
      description: description,
      university: valForUni,
      rate: rate,
      photoURL: photoURL,
    };

    axios
      .post('https://campuspalsdb.herokuapp.com/tutors/add', dataForDB)
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
            <FormLabel htmlFor='tutor-title'>Tutor Posting Title</FormLabel>
            <Input
              id='tutor-title'
              placeholder='Enter title'
              onChange={(event) => setTitle(event.target.value)}
            />

            <FormLabel htmlFor='club-desc'>Description</FormLabel>

            <Input
              id='tutor-desc'
              placeholder='Enter desciption'
              onChange={(event) => setDescription(event.target.value)}
            />

            <FormLabel htmlFor='tutor-rate'>Hourly rate</FormLabel>

            <Input
              id='tutor-rate'
              placeholder='Enter rate (ie. $20/hour)'
              onChange={(event) => setRate(event.target.value)}
            />

            <FormLabel htmlFor='tutor-uni'>Select University</FormLabel>
            <Select
              id='club-uni'
              defaultValue='UBC'
              onChange={(event) => setUniversity(event.target.value)}
            >
              <option>UBC</option>
              <option>SFU</option>
            </Select>

            <FormLabel htmlFor='tutor-website'>Website</FormLabel>

            <Input
              id='tutor-website'
              placeholder='Enter Website'
              onChange={(event) => setWebsite(event.target.value)}
            />

            <FormLabel htmlFor='imgurl'>Image</FormLabel>

            <Input
              id='imgurl'
              placeholder='Enter Image URL'
              onChange={(event) => setPhotoURL(event.target.value)}
            />

            <Button
              mt={4}
              colorScheme='blue'
              type='submit'
              onClick={(e) => {
                submitTutorToDBHandler(e);
                toast({
                  title: 'Tutor posting added',
                  description:
                    "We've added your tutor posting to the directory.",
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
                });
              }}
            >
              Submit
            </Button>
          </Container>
        </HStack>
      </FormControl>
    </VStack>
  );
});
