import { extendTheme } from '@chakra-ui/react';

// Extend the theme to include custom colors
const theme = extendTheme({
  colors: {
    custom: {
      500: '#000000', // your custom color
    },
  },
});

export default theme;
