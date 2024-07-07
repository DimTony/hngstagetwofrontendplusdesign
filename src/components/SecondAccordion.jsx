import React from 'react';
import { Box, HStack, Image } from '@chakra-ui/react';
import flex3 from '../assets/D-0014.png';
import flex4 from '../assets/D-002.png';
import flex5 from '../assets/D-003.png';

const SecondAccordion = () => {
  return (
    <>
      <HStack
        mb="5rem"
        w="100%"
        gap="24px"
        display={{ xl: 'flex', lg: 'flex', md: 'flex', base: 'none' }}
        justifyContent="space-between"
      >
        <Box
          display={{ xl: 'flex', lg: 'flex', md: 'flex', base: 'none' }}
          w="643px"
          h="620px"
        >
          <Image src={flex3} alt="flex_carousel" />
        </Box>
        <Box
          display={{ xl: 'flex', lg: 'flex', md: 'flex', base: 'none' }}
          w="311px"
          h="620px"
        >
          <Image src={flex4} alt="flex_carousel" />
        </Box>
        <Box
          display={{ xl: 'flex', lg: 'flex', md: 'flex', base: 'none' }}
          w="311px"
          h="620px"
        >
          <Image src={flex5} alt="flex_carousel" />
        </Box>
      </HStack>
    </>
  );
};

export default SecondAccordion;
