import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { AddIcon, ChevronDownIcon, MinusIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import BigDisplayItem from '../assets/card 001.png';
import BigDisplayItemBase from '../assets/card 001.png';
import SmallDisplayItem from '../assets/Rectangle 721.png';
import TickIcon from '../assets/TickVector.png';
import DeliveryIcon from '../assets/delivery.png';
import star from '../assets/one.png';
import unstar from '../assets/Five.png';

const ItemCartDisplay = () => {
  const [activeButton, setActiveButton] = useState(0);

  const bigDisplayPic = useBreakpointValue({
    xl: BigDisplayItem,
    lg: BigDisplayItem,
    md: BigDisplayItem,
    base: BigDisplayItemBase,
  });

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <>
      <HStack w="100%" gap="24px" mb="1rem">
        <VStack w={{ xl: '50%', lg: '50%', md: '50%', base: '100%' }}>
          <Stack
            alignItems="center"
            justifyContent="center"
            w={{ xl: '100%', lg: '100%', md: '100%', base: '100%' }}
            h={{ xl: '100%', lg: '300px', md: '300px', base: '410px' }}
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
                  w={{ xl: '255.46px', lg: '100px', md: '70px', base: '88px' }}
                  h={{ xl: '155.46px', lg: '100px', md: '70px', base: '88px' }}
                  border="0.5px solid rgba(223, 221, 220, 1)"
                />
                <Text
                  display={{ xl: 'flex', lg: 'flex', md: 'flex', base: 'none' }}
                  h="34px"
                  fontSize={{
                    xl: '30px',
                    lg: '15px',
                    md: '15px',
                    base: '12px',
                  }}
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
            gap={{ xl: '24px', lg: '20px', md: '18px', base: '14px' }}
            border="0.5px solid rgba(224, 231, 231, 1)"
            p={{ xl: '12px', lg: '10px', md: '8px', base: '8px' }}
          >
            {['Zip', 'Button', 'Zip or Button', 'None'].map((option) => (
              <HStack key={option}>
                <Image
                  src={TickIcon}
                  alt="tick"
                  w={{ xl: '16.5px', lg: '12px', md: '12px', base: '' }}
                  h={{ xl: '16.5px', lg: '12px', md: '12px', base: '' }}
                />
                <Text
                  fontWeight="400"
                  fontSize={{
                    xl: '23px',
                    lg: '14px',
                    md: '12px',
                    base: '12px',
                  }}
                  lineHeight={{
                    xl: '21.6px',
                    lg: '18px',
                    md: '16px',
                    base: '14px',
                  }}
                  textAlign="center"
                  color="rgba(17, 18, 18, 1)"
                >
                  {option}
                </Text>
              </HStack>
            ))}
          </HStack>
          <Text
            display={{ xl: 'flex', lg: 'flex', md: 'flex', base: 'none' }}
            fontSize={{ xl: '18px', lg: '14px', md: '12px', base: '12px' }}
            fontWeight="400"
            lineHeight="19.2px"
            textAlign="center"
            color="rgba(78, 80, 80, 1)"
          >
            Zip cost N1,000.00 extra while button cost N500.00
          </Text>
        </VStack>
        <VStack
          alignItems="flex-start"
          h="940.23px"
          display={{ xl: 'flex', lg: 'flex', md: 'flex', base: 'none' }}
          w={{ xl: '50%', lg: '50%', md: '50%', base: '0%' }}
        >
          <Text
            fontSize="18px"
            fontWeight="400"
            lineHeight="21.6px"
            color="rgba(0, 22, 22, 1)"
          >
            Product
          </Text>
          <HStack
            p="8px 12px 8px 12px"
            border="1px solid rgba(186, 192, 192, 1)"
            bg="rgba(235, 247, 247, 1)"
            borderRadius="4px"
            gap="14px"
            justifyContent="space-between"
            mb="1rem"
          >
            <Image src={DeliveryIcon} w="26.67px" h="18.67px" />
            <Text
              fontFamily="Montserrat"
              fontWeight="500"
              fontSize="24px"
              lineHeight="28.8px"
              textAlign="center"
              color="rgba(78, 80, 80 1)"
            >
              Delivery fee
            </Text>
            <Stack
              justifyContent="center"
              alignItems="center"
              w="63.77px"
              h="27.91px"
              borderRadius="4.95px"
              border="0.25px solid rgba(148, 143, 140, 1)"
              bg="rgba(0, 20, 20, 1)"
            >
              <Text
                fontFamily="Montserrat"
                fontSize="14.86px"
                fontWeight="500"
                lineHeight="17.83px"
                textAlign="center"
                color="rgba(255, 255, 255, 1)"
              >
                1500
              </Text>
            </Stack>
          </HStack>
          <Text
            fontWeight="500"
            fontSize="32px"
            lineHeight="38.4px"
            color="rgab(0, 22, 22, 1)"
            mb="1rem"
          >
            Cream colored totebag
          </Text>
          <HStack mb="1rem">
            <HStack>
              <Image src={star} alt="star" w="40px" h="40px" />
              <Image src={star} alt="star" w="40px" h="40px" />
              <Image src={star} alt="star" w="40px" h="40px" />
              <Image src={star} alt="star" w="40px" h="40px" />
              <Image src={unstar} alt="star" w="40px" h="40px" />
            </HStack>
            <Stack
              justifyContent="center"
              alignItems="center"
              p="5px 10px 5px 10px"
              borderRadius="5px"
              border="0.38px solid rgba(176, 176, 176, 1)"
            >
              <Text
                fontSize="24px"
                fontWeight="600"
                lineHeight="32.64px"
                textAlign="center"
                color="rgba(0, 0, 0, 1)"
              >
                2.4
              </Text>
            </Stack>
          </HStack>
          <HStack h="53px">
            <HStack mr="0.5rem">
              <Text
                fontWeight="600"
                fontSize="20px"
                lineHeight="27.2px"
                color="rgba(0,0,0,1)"
                letterSpacing="-0.01em"
              >
                Price:
              </Text>
              <Stack
                justifyContent="center"
                alignItems="center"
                borderRadius="4px"
                border="0.5px solid rgba(224, 231, 231, 1)"
                p="8px 12px 8px 12px"
              >
                <Text
                  fontSize="24px"
                  fontWeight="700"
                  lineHeight="28.8px"
                  letterSpacing="-0.01em"
                  color="rgba(0, 22, 22, 1)"
                  fontFamily="Montserrat"
                >
                  N 4,000
                </Text>
              </Stack>
            </HStack>
            <Divider
              orientation="vertical"
              borderWidth="2.5px"
              borderColor="rgba(212, 212, 212, 1)"
            />
            <HStack ml="0.5rem">
              <Text
                fontSize="18px"
                fontWeight="600"
                lineHeight="24.48px"
                letterSpacing="-0.01em"
                color="rgba(0,0,0,1)"
              >
                Quantity:
              </Text>
              <HStack>
                <AddIcon w="20px" h="20px" />
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="6px"
                  border="1.37px solid rgba(223, 221, 220, 1)"
                  bg="rgba(255, 255, 255, 1)"
                  p="6px 15px 6px 15px"
                >
                  <Text
                    fontFamily="Ubuntu"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="28.8px"
                    letterSpacing="-0.01em"
                    color="rgba(107, 111, 107, 1)"
                  >
                    1
                  </Text>
                </Stack>
                <MinusIcon w="22px" h="22px" />
              </HStack>
            </HStack>
          </HStack>
          <Box w="645px" h="51px" mb="2rem">
            <Text
              fontSize="18px"
              fontWeight="400"
              lineHeight="25.2px"
              color="rgba(78, 80, 80, 1)"
              noOfLines={2}
            >
              The Cream-Colored Totebag is a blend of elegance and
              functionality. Crafted from luxurious fabric, its spacious
              interior accommodates daily essentials. Lightweight and stylish,
              it's perfect for any occasion, offering comfort and
              sophistication. The tote features sturdy, reinforced handles for
              added durability, ensuring it can carry heavier items without
              compromising on style. Inside, multiple pockets provide organized
              storage, making it easy to find your keys, phone, or wallet. The
              classic cream color pairs effortlessly with any outfit, making it
              a versatile accessory for both casual and formal settings. Whether
              you're heading to work, running errands, or enjoying a night out,
              this tote bag elevates your look while providing practical storage
              solutions.
            </Text>
          </Box>
          <Button
            variant="outline"
            borderRadius="5.98px"
            border="0.96px solid rgba(78, 80, 80, 1)"
            p="19.4px, 194.66px, 19.4px, 194.66px"
            w="490.32px"
            h="71.8px"
            fontSize="23.78px"
            fontWeight="600"
            lineHeight="33.29px"
          >
            Buy Now
          </Button>
          <Button
            variant="solid"
            bg="rgba(0, 18, 18, 1)"
            borderRadius="5.98px"
            border="0.64px solid rgba(224, 231, 231 1)"
            p="19.29px, 174.21px, 19.29px, 174.21px"
            w="490.32px"
            h="71.8px"
            color="rgba(255, 232, 232, 1)"
            fontSize="23.78px"
            fontWeight="600"
            lineHeight="33.29px"
            _hover={{
              bg: 'rgba(235, 247, 247, 1)',
              color: 'rgba(17, 18, 18, 1)',
              border: '0.96px solid rgba(78, 80, 80, 1)',
            }}
            mb="1rem"
          >
            Add to cart
          </Button>

          <Menu>
            <MenuButton
              w="645.71px"
              h="87.05px"
              textAlign="left"
              p="23.74px"
              borderRadius="7.91px"
              border="0.99px solid rgba(0, 128, 127, 1)"
              color="rgba(224, 231, 231, 1)"
              as={Button}
              rightIcon={
                <ChevronDownIcon color="rgba(0, 90, 89, 1)" w="40px" h="auto" />
              }
            >
              <Text
                fontWeight="400"
                fontSize="27.7px"
                lineHeight="38.78px"
                color="rgba(0, 90, 89, 1)"
              >
                {' '}
                Select your location
              </Text>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => alert('Profile clicked')}>
                Profile
              </MenuItem>
              <MenuItem onClick={() => alert('Settings clicked')}>
                Settings
              </MenuItem>
              <MenuItem onClick={() => alert('Logout clicked')}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </VStack>
      </HStack>
      <VStack
        w="100%"
        alignItems="flex-start"
        display={{ xl: 'none', lg: 'none', md: 'none', base: 'flex' }}
      >
        <Text
          fontSize="16px"
          fontWeight="600"
          lineHeight="19.2px"
          textAlign="center"
          color="rgba(0, 22, 22, 1)"
          fontFamily="Montserrat"
        >
          Cream Totebag
        </Text>

        <HStack>
          <Image src={star} alt="star" w="24px" h="24px" />
          <Image src={star} alt="star" w="24px" h="24px" />
          <Image src={star} alt="star" w="24px" h="24px" />
          <Image src={star} alt="star" w="24px" h="24px" />
          <Image src={unstar} alt="star" w="24px" h="24px" />
        </HStack>

        <HStack mb="1rem">
          <HStack mr="0.5rem">
            <Text
              fontWeight="400"
              fontSize="18px"
              lineHeight="12px"
              color="rgba(0,0,0,1)"
              letterSpacing="-0.01em"
              fontFamily="Montserrat"
            >
              Price:
            </Text>
            <Stack
              justifyContent="center"
              alignItems="center"
              borderRadius="3.1px"
              border="0.39px solid rgba(224, 231, 231, 1)"
              p="4.65px, 6.19px, 4.65px, 6.19px"
              bg="rgba(238, 255, 255, 1)"
            >
              <Text
                fontSize="14px"
                fontWeight="700"
                lineHeight="14.86px"
                letterSpacing="-0.01em"
                color="rgba(0, 22, 22, 1)"
                fontFamily="Montserrat"
              >
                N 4,000
              </Text>
            </Stack>
          </HStack>

          <HStack ml="0.5rem">
            <Text
              fontSize="18px"
              fontWeight="600"
              lineHeight="24.48px"
              letterSpacing="-0.01em"
              color="rgba(0,0,0,1)"
            >
              Quantity:
            </Text>
            <HStack>
              <AddIcon w="20px" h="20px" />
              <Stack
                justifyContent="center"
                alignItems="center"
                borderRadius="6px"
                border="1.37px solid rgba(223, 221, 220, 1)"
                bg="rgba(255, 255, 255, 1)"
                p="6px 15px 6px 15px"
              >
                <Text
                  fontFamily="Ubuntu"
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="28.8px"
                  letterSpacing="-0.01em"
                  color="rgba(107, 111, 107, 1)"
                >
                  1
                </Text>
              </Stack>
              <MinusIcon w="22px" h="22px" />
            </HStack>
          </HStack>
        </HStack>

        <HStack gap="6px">
          {['XL', 'XXL', 'L', 'S', 'M'].map((size, index) => (
            <Button
              key={index}
              onClick={() => handleButtonClick(index)}
              bg={activeButton === index ? 'rgba(0, 22, 22, 1)' : 'transparent'}
              color={
                activeButton === index
                  ? 'rgba(238, 255, 255, 1)'
                  : 'rgba(53, 53, 59, 1)'
              }
              _hover={{ bg: activeButton === index ? 'blue.600' : 'gray.300' }}
              p="5.5px, 6.75px, 5.5px, 6.75px"
              border={
                activeButton === index
                  ? '0.25px solid rgba(0, 22, 22, 1)'
                  : '0.25px solid rgba(185, 191, 191, 1)'
              }
              fontSize="14px"
              fontWeight="800"
              lineHeight="12.8px"
              fontFamily="Montserrat"
            >
              {size}
            </Button>
          ))}
        </HStack>
      </VStack>
    </>
  );
};

export default ItemCartDisplay;
