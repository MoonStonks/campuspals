import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontFamily: 'calibri',
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'calibri',
      },
    },
  },
});
export default theme;
