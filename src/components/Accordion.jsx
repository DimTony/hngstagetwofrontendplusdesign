import { Box, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import mobileBlog1 from '../assets/B.P-001.png';
import mobileBlog2 from '../assets/B.P-002.png';
import mobileBlog3 from '../assets/B.P-003.png';

const Accordion = () => {
  return (
    <>
      <VStack mb="2rem">
        <Box
          display={{ xl: 'none', lg: 'none', md: 'none', base: 'flex' }}
          w="100%"
          h="auto"
        >
          <Image src={mobileBlog1} alt="flex_carousel" />
        </Box>
        <Box
          display={{ xl: 'none', lg: 'none', md: 'none', base: 'flex' }}
          w="100%"
          h="auto"
        >
          <Image src={mobileBlog2} alt="flex_carousel" />
        </Box>
        <Box
          display={{ xl: 'none', lg: 'none', md: 'none', base: 'flex' }}
          w="100%"
          h="auto"
        >
          <Image src={mobileBlog3} alt="flex_carousel" />
        </Box>
      </VStack>
    </>
  );
};

export default Accordion;
