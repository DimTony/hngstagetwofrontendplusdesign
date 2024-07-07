import {
  Box,
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import BigDisplayItem from '../assets/card 001.png';
import BigDisplayItemBase from '../assets/card 001.png';
import SmallDisplayItem from '../assets/Rectangle 721.png';
import TickIcon from '../assets/TickVector.png';

const ItemCartDisplay = () => {
  const bigDisplayPic = useBreakpointValue({
    xl: BigDisplayItem,
    lg: BigDisplayItem,
    md: BigDisplayItem,
    base: BigDisplayItemBase,
  });

  return (
    <HStack w="100%">
      <VStack w={{ xl: '50%', lg: '50%', md: '50%', base: '100%' }}>
        <Stack
          alignItems="center"
          justifyContent="center"
          w={{ xl: '100%', lg: '644px', md: '644px', base: '100%' }}
          h={{ xl: '100%', lg: '560px', md: '560px', base: '410px' }}
          bg={{
            xl: 'none',
            lg: 'none',
            md: 'none',
            base: 'rgba(250, 255, 255, 1)',
          }}
          boxShadow={{
            xl: 'none',
            lg: 'none',
            md: 'none',
            base: '-3px 3px 15px 0 rgba(0, 0, 0, 0.05)',
          }}
          mb="2rem"
        >
          <Image
            src={bigDisplayPic}
            alt="bigpic"
            w={{ xl: '100%', lg: '644px', md: '644px', base: '335px' }}
            h={{ xl: 'auto', lg: '560px', md: '560px', base: '367px' }}
            border="0.5px solid rgba(223, 221, 220, 1)"
          />
        </Stack>
        <HStack
          w={{ xl: '70%' }}
          gap={{ xl: '24px', lg: '20px', md: '18px', base: '16px' }}
        >
          {['WHITE', 'BLACK', 'GREY'].map((color) => (
            <VStack key={color}>
              <Image
                src={SmallDisplayItem}
                alt="smallpic"
                w={{ xl: '255.46px', lg: '100px', md: '90px', base: '88px' }}
                h={{ xl: '155.46px', lg: '100px', md: '90px', base: '88px' }}
                border="0.5px solid rgba(223, 221, 220, 1)"
              />
              <Text
                display={{ xl: 'flex', lg: 'flex', md: 'flex', base: 'none' }}
                h="34px"
                fontSize="30px"
                lineHeight="28px"
                fontWeight="400"
                color="rgba(0,0,0,1)"
              >
                {color}
              </Text>
            </VStack>
          ))}
        </HStack>
        <HStack
          display={{ xl: 'flex', lg: 'flex', md: 'flex', base: 'none' }}
          bg="rgba(255, 255, 255, 1)"
          gap="24px"
          border="0.5px solid rgba(224, 231, 231, 1)"
          p="18px"
        >
          {['Zip', 'Button', 'Zip or Button', 'None'].map((option) => (
            <HStack key={option}>
              <Image src={TickIcon} alt="tick" w="16.5px" h="16.5px" />
              <Text
                fontWeight="400"
                fontSize="30px"
                lineHeight="21.6px"
                textAlign="center"
                color="rgba(17, 18, 18, 1)"
              >
                {option}
              </Text>
            </HStack>
          ))}
        </HStack>
        <Text
          fontSize="24px"
          fontWeight="400"
          lineHeight="19.2px"
          textAlign="center"
          color="rgba(78, 80, 80, 1)"
        >
          Zip cost N1,000.00 extra while button cost N500.00
        </Text>
      </VStack>
      <VStack
        display={{ xl: 'flex', lg: 'flex', md: 'flex', base: 'none' }}
        w={{ xl: '50%', lg: '50%', md: '50%', base: '0%' }}
      ></VStack>
    </HStack>
  );
};

export default ItemCartDisplay;
