import React, { useEffect, useState } from 'react';
import { DiscussionEmbed } from 'disqus-react';
import { isEmpty } from 'lodash';
import {
  chakra,
  Button,
  Heading,
  HStack,
  Img,
  Flex,
  Box,
  useColorModeValue,
  Icon,
  Image,
  Tag,
  Text,
  Link,
  Grid,
  GridItem,
  VStack,
  Spacer,
  IconButton,
} from '@chakra-ui/react';

/**
 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
/*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */

export default chakra(function CommentBox({ className, club, url }) {
  const [disqusConfig, setDisqusConfig] = useState({});

  useEffect(() => {
    if (club && url) {
      console.log(club + ' ' + url);
      setDisqusConfig({
        url: `${url}`,
        identifier: `${club}`,
        title: `${club}`,
      });
    }
  }, [club, url]);

  return (
    <Box className={className} w='600px'>
      {/* <Heading size='md'>{club} Comment Box</Heading> */}

      {!isEmpty(disqusConfig) && (
        <DiscussionEmbed shortname='campus-pals' config={disqusConfig} />
      )}
    </Box>
  );
});

// export default CommentBox;
