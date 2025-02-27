import {
  Box,
  HStack,
  Image,
  Input,
  List,
  ListItem,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import searchIcon from '../assets/uil_search.png';
import SearchBaseIcon from '../assets/SearchBaseVector.png';
import BaseSearchLeftIcon from '../assets/BaseSearchLeftIcon.png';
import React, { useState } from 'react';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([
    'Corduroy Totebag',
    'Denim Totebag',
    'Adire Totebag',
    'Leather Totebag',
    'Chinos Totebag',
    'Pure Cotton Totebag',
    'Cotton Totebag',
    'Black Chinos Totebag',
    'Chinos & Cotton Totebag',
    'Cotton Totebag',
  ]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(inputValue.toLowerCase())
  );

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
          position="relative"
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

          <Input
            w="100%"
            h="100%"
            borderRadius="0px 8px 8px 0px"
            border="none"
            p="1rem"
            color="rgba(147, 152, 152, 1)"
            fontSize={{ xl: '19.64', lg: '17px', md: '16px', base: '12px' }}
            type="text"
            placeholder={textContent}
            value={inputValue}
            onChange={handleInputChange}
          />
          {inputValue && (
            <Box
              position="absolute"
              top="100%"
              left="0"
              right="0"
              bg="white"
              border="1px solid rgba(147, 152, 152, 0.5)"
              borderRadius="0px 8px 8px 0px"
              zIndex="10"
            >
              <List spacing={0}>
                {filteredSuggestions.map((suggestion, index) => (
                  <ListItem
                    key={index}
                    p="1rem"
                    cursor="pointer"
                    _hover={{ bg: 'gray.100' }}
                    onClick={() => {
                      setInputValue(suggestion);
                    }}
                  >
                    {suggestion}
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
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
