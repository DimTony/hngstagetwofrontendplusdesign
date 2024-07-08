import { Button, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import ItemPic from '../assets/Card 4.png';
import star from '../assets/one.png';
import unstar from '../assets/Five.png';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import TrashIcon from '../assets/TrashVector.png';
import badgeIcon from '../assets/WarnVector.png';
import atmIcon from '../assets/AtmVector.png';
import itemPic from '../assets/Product 1.png';
import bullet from '../assets/BulletVector.png';
import trashIcon from '../assets/DelVector.png';

const MobileCheckoutOrder = () => {
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
    </>
  );
};

export default MobileCheckoutOrder;
