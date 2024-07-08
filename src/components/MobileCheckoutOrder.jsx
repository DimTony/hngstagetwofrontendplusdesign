import {
  Box,
  Button,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import ItemPic from '../assets/Card 4.png';
import star from '../assets/one.png';
import unstar from '../assets/Five.png';
import { AddIcon, EditIcon, MinusIcon } from '@chakra-ui/icons';
import TrashIcon from '../assets/TrashVector.png';
import badgeIcon from '../assets/WarnVector.png';
import atmIcon from '../assets/AtmVector.png';
import atmBlackIcon from '../assets/AtmBlackVector.png';
import itemPic from '../assets/Product 1.png';
import bullet from '../assets/BulletVector.png';
import trashIcon from '../assets/DelVector.png';
import LocationIcon from '../assets/LocationVector.png';
import mobileFlex1 from '../assets/view port.png';

const MobileCheckoutOrder = ({ toggleCheckoutView }) => {
  const totals = [
    {
      name: 'Subtotal',
      amount: 'N4,000.00',
    },

    {
      name: 'Zip(s)',
      amount: 'N1,000.00',
    },
    {
      name: 'Delivery',
      amount: 'N1,500.00',
    },
  ];
  return (
    <>
      <VStack w="100%">
        {[1, 2, 3, 4].map((item, index) => (
          <HStack
            key={index}
            w="100%"
            p="8.04px 8.04px 16.4px 8.04px"
            borderBottom="0.2px solid rgba(224, 231, 231, 1)"
            justifyContent="space-between"
            mb="1rem"
          >
            <HStack>
              <Image
                src={itemPic}
                alt="item"
                w="60.32px"
                h="60.32px"
                border="0.34px solid rgba(223, 221, 220, 1)"
              />
              <VStack alignItems="flex-start" h="59.96px" gap="8px">
                <Text
                  fontSize="16.08px"
                  fontWeight="500"
                  lineHeight="19.3px"
                  letterSpacing="-0.08px"
                  color="rgba(0, 0, 0, 1)"
                >
                  Cream totebag
                </Text>
                <HStack>
                  <Text
                    fontFamily="Montserrat"
                    fontWeight="400"
                    fontSize="12.06px"
                    lineHeight="14.48px"
                    letterSpacing="-0.06px"
                    color="rgba(111, 107, 105, 1)"
                  >
                    1 Item
                  </Text>
                  <Image src={bullet} alt="bullet" w="3.35px" h="3.35px" />
                  <Text
                    fontFamily="Montserrat"
                    fontWeight="400"
                    fontSize="12.06px"
                    lineHeight="14.48px"
                    letterSpacing="-0.06px"
                    color="rgba(111, 107, 105, 1)"
                  >
                    Zip
                  </Text>
                </HStack>
                <HStack>
                  <Image
                    src={star}
                    alt="star"
                    w={{ xl: '28px', base: '14.82px' }}
                    h={{ xl: '28px', base: '14.82px' }}
                    borderRadius="6.22px"
                  />
                  <Image
                    src={star}
                    alt="star"
                    w={{ xl: '28px', base: '14.82px' }}
                    h={{ xl: '28px', base: '14.82px' }}
                    borderRadius="6.22px"
                  />
                  <Image
                    src={star}
                    alt="star"
                    w={{ xl: '28px', base: '14.82px' }}
                    h={{ xl: '28px', base: '14.82px' }}
                    borderRadius="6.22px"
                  />
                  <Image
                    src={star}
                    alt="star"
                    w={{ xl: '28px', base: '14.82px' }}
                    h={{ xl: '28px', base: '14.82px' }}
                    borderRadius="6.22px"
                  />
                  <Image
                    src={unstar}
                    alt="star"
                    w={{ xl: '28px', base: '14.82px' }}
                    h={{ xl: '28px', base: '14.82px' }}
                    borderRadius="6.22px"
                  />
                </HStack>
              </VStack>
            </HStack>

            <VStack h="60.32px" justifyContent="space-between">
              <Text
                w="100%"
                textAlign="right"
                fontFamily="Montserrat"
                fontSize="11.21px"
                lineHeight="17.93px"
                letterSpacing="-1%"
                color="rgba(0, 22, 22, 1)"
                fontWeight="700"
              >
                N 4,000
              </Text>
              <HStack>
                <HStack
                  w="61.61px"
                  p="4.57px"
                  borderRadius="4.02px"
                  gap="3.75px"
                  bg="rgba(224, 231, 231, 1)"
                  border="0.5px solid rgba(224,, 231, 231, 1)"
                >
                  <AddIcon />
                  <Text>1</Text>
                  <MinusIcon />
                </HStack>
                <Image src={trashIcon} alt="trash" w="16.08px" h="18.1px" />
              </HStack>
            </VStack>
          </HStack>
        ))}
      </VStack>
      <VStack
        gap="24px"
        w="100%"
        p="24px"
        border="0.5px solid rgba(224, 231, 231, 1)"
        mb="1rem"
      >
        <HStack w="100%">
          <Image src={LocationIcon} alt="atm" w="16.08px" h="18.1px" />
          <Text fontSize="14px" fontWeight="500" lineHeight="16.44px">
            Delivery Location
          </Text>
        </HStack>
        <HStack w="100%" alignItems="center" justifyContent="center">
          <Stack p="8px" borderRadius="4px" bg="rgba(224, 231, 231, 1)">
            <AddIcon w="10px" h="auto" />
          </Stack>
          <Text
            fontWeight="400"
            fontSize="10px"
            lineHeight="11.74px"
            color="rgba(78, 80, 80, 1)"
          >
            Add your location and well descriptive
          </Text>
        </HStack>
        <HStack mb="1rem" w="100%" justifyContent="flex-end">
          <Button
            w="59px"
            h="34.62px"
            bg="rgba(0, 21, 21, 1)"
            p="9px 8.31px 9px 8.31px"
            leftIcon={<EditIcon color="rgba(224, 231, 231, 1)" />}
          >
            <Text
              color="rgba(238, 255, 255, 1)"
              fontWeight="600"
              fontSize="12px"
              lineHeight="14.09px"
            >
              Edit
            </Text>
          </Button>
        </HStack>
      </VStack>
      <VStack
        mb="1rem"
        pt="24px"
        borderTop="0.5px solid rgba(224, 231, 231, 1)"
        w="100%"
      >
        {totals.map((item, index) => (
          <HStack w="100%" justifyContent="space-between" mb="1rem">
            <Text
              fontFamily="Montserrat"
              fontSize="14px"
              fontWeight="400"
              lineHeight="17.07px"
              letterSpacing="-0.01em"
              color="rgba(78, 80, 80, 1)"
            >
              {item.name}
            </Text>
            <Text
              fontFamily="Montserrat"
              fontSize="11.2px"
              fontWeight="700"
              lineHeight="17.82px"
              letterSpacing="-1%"
              color="rgba(0, 22, 22, 1)"
            >
              {/* N4,000.00 */}
              {item.amount}
            </Text>
          </HStack>
        ))}
      </VStack>
      <HStack
        mb="1rem"
        p="16px 0px 16px 0px"
        w="100%"
        justifyContent="space-between"
        borderTop="0.5px solid rgba(185, 191, 191, 1)"
        borderBottom="0.5px solid rgba(185, 191, 191, 1)"
      >
        <Text
          fontFamily="Montserrat"
          fontWeight="600"
          fontSize="14px"
          lineHeight="17.07px"
          letterSpacing="-0.01em"
          color="rgba(0,22,22,1)"
        >
          Total
        </Text>
        <Text
          fontFamily="Montserrat"
          fontWeight="700"
          fontSize="11.2px"
          lineHeight="17.92px"
          letterSpacing="-1%"
          color="rgba(0,22,22,1)"
        >
          N6,505.00
        </Text>
      </HStack>

      <HStack
        bg="rgba(224, 231, 231, 0.3)"
        borderRadius="2px"
        border="0.5px solid rgba(224, 231, 231, 1)"
        p="8px 197px 8px 12px"
        gap="10px"
        w="100%"
        mb="1rem"
      >
        <Text
          fontSize="12px"
          fontWeight="400"
          lineHeight="12px"
          color="rgba(0, 20, 20, 1)"
          _groupHover={{
            color: 'rgba(0, 22, 22, 1)',
          }}
        >
          Payment options
        </Text>
        <Image
          src={atmBlackIcon}
          alt="atm"
          w="15.44px"
          h="12.01px"
          _groupHover={{
            filter: 'brightness(0) invert(1)',
          }}
        />
      </HStack>

      <Button
        mb="1rem"
        w="100%"
        h="56px"
        variant="outline"
        borderRadius="24px"
        border="0.74px solid rgba(147, 152, 152, 1)"
        p="17px 85px 17px 85px"
        fontSize="16px"
        lineHeight="22.4px"
        fontWeight="600"
        color="rgba(46, 48, 48, 1)"
      >
        Proceed to checkout
      </Button>

      {/* Implement Carousel Logic */}

      <Image
        mb="2rem"
        display={{ xl: 'none', base: 'flex' }}
        src={mobileFlex1}
        alt="flex_carousel"
      />

      {/* Implement Carousel Logic */}
    </>
  );
};

export default MobileCheckoutOrder;
