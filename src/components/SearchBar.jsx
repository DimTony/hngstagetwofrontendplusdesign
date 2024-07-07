import {
  Box,
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import searchIcon from '../assets/uil_search.png';
import SearchBaseIcon from '../assets/SearchBaseVector.png';
import BaseSearchLeftIcon from '../assets/BaseSearchLeftIcon.png';
import React from 'react';

const SearchBar = () => {
  const iconSrc = useBreakpointValue({
    base: SearchBaseIcon,
    md: searchIcon,
    lg: searchIcon,
    xl: searchIcon,
  });

  const textContent = useBreakpointValue({
    xl: 'search for your favourite totebag, colour, design patterns',
    lg: 'search for your favourite totebag...',
    md: 'search for your favourite totebag...',
    base: 'search for your favourite totebag...',
  });

  return (
    <>
      <VStack
        w={{ xl: '726.64px', lg: '726.64px', md: '400px', base: '328px' }}
        h={{ xl: '60.55px', lg: '60.55px', md: '50px', base: '48px' }}
        borderRadius="8px"
        boxShadow="0px 4.36px 16.36px 0px rgba(0, 0, 0, 0.07)"
        mb={{ xl: '2rem', lg: '1.6rem', md: '1.4rem', base: '1rem' }}
      >
        <HStack
          w="100%"
          h="100%"
          spacing={0}
          pr={{ xl: '0', lg: '0', md: '0', base: '0.5rem' }}
          bg={{
            xl: '#ffffff',
            lg: '#ffffff',
            md: '#ffffff',
            base: 'rgba(241, 255, 255, 1)',
          }}
          borderRadius="8px"
          border={{
            xl: 'none',
            lg: 'none',
            md: 'none',
            base: '0.5px solid rgba(223, 221, 220, 1)',
          }}
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            w={{ xl: '10%', lg: '12%', md: '12%', base: '15%' }}
            h="100%"
            borderRadius="8px 0px 0px 8px"
            bg={{ xl: 'black', lg: 'black', md: 'black', base: 'transparent' }}
          >
            <Image
              bg="transparent"
              src={iconSrc}
              w={{ xl: '30.55px', lg: '28px', md: '24px', base: '20.01px' }}
              h="auto"
            />
          </Stack>
          <Box w="90%" h="100%" borderRadius="0px 8px 8px 0px" p="1rem">
            <Text
              color="rgba(147, 152, 152, 1)"
              fontSize={{ xl: '19.64', lg: '17px', md: '16px', base: '12px' }}
              bg="transparent"
            >
              {textContent}
            </Text>
          </Box>
          <Stack
            display={{ xl: 'none', lg: 'none', md: 'none', base: 'flex' }}
            justifyContent="center"
            alignItems="center"
            bg="#000"
            w="32px"
            h="32.01px"
            borderRadius="4.8px"
          >
            <Image src={BaseSearchLeftIcon} alt="icon" w="13.5px" h="12.75px" />
          </Stack>
        </HStack>
      </VStack>
    </>
  );
};

export default SearchBar;
