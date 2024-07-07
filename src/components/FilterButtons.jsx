import React from 'react';
import { Box, HStack, Image, Text } from '@chakra-ui/react';
import allIcon from '../assets/AllIcon.png';

const FilterButtons = () => {
  return (
    <>
      <Box
        w="100%"
        overflowX="auto"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none' /* IE and Edge */,
          'scrollbar-width': 'none' /* Firefox */,
        }}
      >
        <HStack
          w="max-content"
          h={{ xl: '56px', lg: '50px', md: '45px', base: '39px' }}
          gap={{ xl: '16px', lg: '14px', md: '12px', base: '8px' }}
          position="relative"
          left={{ xl: '28%', lg: '12%', md: '10%', base: '0' }}
          mb="1rem"
        >
          <HStack
            w="101px"
            h="100%"
            borderRadius="30px"
            alignItems="center"
            justifyContent="center"
            border="0.5px solid rgba(147, 152, 152, 1)"
            bg="rgba(0, 22, 22, 1)"
          >
            <Image src={allIcon} w="18px" h="auto" bg="transparent" />
            <Text color="#ffffff" fontSize="20px" lineHeight="24px">
              All
            </Text>
          </HStack>
          <HStack
            minW="101px"
            h="100%"
            borderRadius="30px"
            alignItems="center"
            justifyContent="center"
            border="0.5px solid rgba(147, 152, 152, 1)"
            p="16px 24px 16px 24px"
          >
            <Text color="rgba(53, 53, 59, 1)" fontSize="20px" lineHeight="24px">
              Corduroy
            </Text>
          </HStack>
          <HStack
            minW="101px"
            h="100%"
            borderRadius="30px"
            alignItems="center"
            justifyContent="center"
            border="0.5px solid rgba(147, 152, 152, 1)"
            p="16px 24px 16px 24px"
          >
            <Text color="rgba(53, 53, 59, 1)" fontSize="20px" lineHeight="24px">
              Denim
            </Text>
          </HStack>
          <HStack
            minW="101px"
            h="100%"
            borderRadius="30px"
            alignItems="center"
            justifyContent="center"
            border="0.5px solid rgba(147, 152, 152, 1)"
            p="16px 24px 16px 24px"
          >
            <Text color="rgba(53, 53, 59, 1)" fontSize="20px" lineHeight="24px">
              Adire
            </Text>
          </HStack>
          <HStack
            minW="101px"
            h="100%"
            borderRadius="30px"
            alignItems="center"
            justifyContent="center"
            border="0.5px solid rgba(147, 152, 152, 1)"
            p="16px 24px 16px 24px"
          >
            <Text color="rgba(53, 53, 59, 1)" fontSize="20px" lineHeight="24px">
              Leather
            </Text>
          </HStack>
        </HStack>
      </Box>
    </>
  );
};

export default FilterButtons;
