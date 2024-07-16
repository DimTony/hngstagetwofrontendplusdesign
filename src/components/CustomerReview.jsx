import {
  Avatar,
  Divider,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import CusPic from '../assets/Ellipse 1253.png';
import star from '../assets/one.png';
import unstar from '../assets/Five.png';
import ItemPic from '../assets/Rectangle 725.png';
import { AddIcon } from '@chakra-ui/icons';

const CustomerReview = ({ productLoading }) => {
  return (
    <>
      <HStack w="100%">
        <VStack
          display={{ xl: 'flex', lg: 'flex', md: 'flex', base: 'none' }}
          w="50%"
        ></VStack>
        <VStack w="50%" justifyContent="flex-start" alignItems="flex-start">
          <VStack spacing={0} alignItems="flex-start">
            <Text
              fontSize={{ xl: '28px', lg: '24px', md: '18px', base: '12px' }}
              lineHeight={{
                xl: '38.08px',
                lg: '30px',
                md: '24px',
                base: '16.32px',
              }}
              fontWeight="600"
              color="rgba(0, 21, 21, 1)"
            >
              Customer Reviews
            </Text>
            <Text
              fontSize={{ xl: '18px', lg: '14px', md: '12px', base: '8px' }}
              fontWeight="400"
              lineHeight={{
                xl: '24.48px',
                lg: '20px',
                md: '18px',
                base: '10.88px',
              }}
              color="rgba(46, 48, 48, 1)"
            >
              Testimonies from customers.
            </Text>
          </VStack>
          {[1, 2, 3].map((user, index) => (
            <HStack
              key={index}
              w="100%"
              justifyContent="flex-start"
              alignItems="flex-start"
              mb="1rem"
              p={{ xl: '0', lg: '0', md: '0', base: '14.82px' }}
            >
              {productLoading ? (
                <Skeleton
                  w={{ xl: '78.59px', lg: '50px', md: '40px', base: '29.64px' }}
                  h={{ xl: '78.59px', lg: '50px', md: '40px', base: '29.64px' }}
                  borderRadius="50%"
                />
              ) : (
                <Avatar
                  src={CusPic}
                  w={{ xl: '78.59px', lg: '50px', md: '40px', base: '29.64px' }}
                  h={{ xl: '78.59px', lg: '50px', md: '40px', base: '29.64px' }}
                  alt="cusPic"
                />
              )}
              {productLoading ? (
                <VStack
                  w={{ xl: '100%', base: '260.3px' }}
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Skeleton w="20%" h="2rem" borderRadius="10px" />
                  <Skeleton w="30%" h="2rem" borderRadius="10px" />
                  <Skeleton w="20%" h="2rem" borderRadius="10px" />
                </VStack>
              ) : (
                <VStack
                  w={{ xl: '100%', base: '260.3px' }}
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Text
                    fontSize={{
                      xl: '34.39px',
                      lg: '28px',
                      md: '18px',
                      base: '12.97px',
                    }}
                    fontWeight="500"
                    lineHeight={{
                      xl: '41.26px',
                      lg: '35px',
                      md: '24px',
                      base: '15.56px',
                    }}
                    color="rgba(0, 21, 21, 1)"
                  >
                    Yusuf
                  </Text>
                  <Text
                    mb="1rem"
                    fontFamily="Montserrat"
                    fontWeight="400"
                    fontSize={{ xl: '19.65px', base: '7.41px' }}
                    lineHeight={{ xl: '26.72px', base: '10.08px' }}
                    color="rgba(111, 107, 105, 1)"
                  >
                    May 15, 2024
                  </Text>
                  <HStack mb="1rem">
                    <Text
                      fontSize={{ xl: '24px', base: '11.12px' }}
                      fontWeight="600"
                      lineHeight={{ xl: '28.8px', base: '13.34px' }}
                      color="rgba(111, 107, 105, 1)"
                    >
                      Rating:
                    </Text>
                    <HStack>
                      <Image
                        src={star}
                        alt="star"
                        w={{ xl: '39.3px', base: '14.82px' }}
                        h={{ xl: '39.3px', base: '14.82px' }}
                      />
                      <Image
                        src={star}
                        alt="star"
                        w={{ xl: '39.3px', base: '14.82px' }}
                        h={{ xl: '39.3px', base: '14.82px' }}
                      />
                      <Image
                        src={star}
                        alt="star"
                        w={{ xl: '39.3px', base: '14.82px' }}
                        h={{ xl: '39.3px', base: '14.82px' }}
                      />
                      <Image
                        src={star}
                        alt="star"
                        w={{ xl: '39.3px', base: '14.82px' }}
                        h={{ xl: '39.3px', base: '14.82px' }}
                      />
                      <Image
                        src={unstar}
                        alt="star"
                        w={{ xl: '39.3px', base: '14.82px' }}
                        h={{ xl: '39.3px', base: '14.82px' }}
                      />
                    </HStack>
                  </HStack>
                  <HStack
                    h={{ xl: '35px', base: '22.23px' }}
                    w={{ xl: '100%', base: '318.38px' }}
                    mb="1rem"
                  >
                    <Text
                      fontSize={{ xl: '24px', base: '11.12px' }}
                      fontWeight="400"
                      lineHeight={{ xl: '28.8px', base: '13.34px' }}
                    >
                      Size: 16:9
                    </Text>
                    <Divider
                      orientation="vertical"
                      borderWidth="2px"
                      borderColor="rgba(212, 212, 212, 1)"
                    />
                    <Text
                      fontSize={{ xl: '24px', base: '11.12px' }}
                      fontWeight="400"
                      lineHeight={{ xl: '28.8px', base: '13.34px' }}
                    >
                      Color: Cream
                    </Text>
                    <Divider
                      orientation="vertical"
                      borderWidth="2px"
                      borderColor="rgba(212, 212, 212, 1)"
                    />
                    <Text
                      fontSize={{ xl: '24px', base: '11.12px' }}
                      fontWeight="400"
                      lineHeight={{ xl: '28.8px', base: '13.34px' }}
                    >
                      Design element: Cream
                    </Text>
                  </HStack>
                  <HStack
                    mb="1rem"
                    w={{ xl: '416.6px', base: '100%' }}
                    h={{ xl: '193.62px', base: '100%' }}
                    gap="24px"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <Stack
                      w={{ xl: '199px', base: '41.69px' }}
                      h={{ xl: '193.62px', base: '40.56px' }}
                      justifyContent="center"
                      alignItems="center"
                      bg="rgba(255, 255, 255, 1)"
                      border="0.5px solid rgba(224, 231, 231, 1)"
                    >
                      <Image
                        src={ItemPic}
                        alt="item"
                        w={{ xl: '150px', base: '31.5px' }}
                        h={{ xl: '150px', base: '31.5px' }}
                      />
                    </Stack>
                    <Stack
                      w={{ xl: '199px', base: '41.69px' }}
                      h={{ xl: '193.62px', base: '40.56px' }}
                      justifyContent="center"
                      alignItems="center"
                      bg="rgba(255, 255, 255, 1)"
                      border="0.5px solid rgba(224, 231, 231, 1)"
                    >
                      <AddIcon
                        w={{ xl: '42px', base: '12px' }}
                        h="auto"
                        color="rgba(224, 231, 231, 1)"
                      />
                    </Stack>
                  </HStack>
                  <Text
                    fontSize={{ xl: '20px', base: '10px' }}
                    fontWeight="400"
                    lineHeight={{ xl: '31.2px', base: '15.6px' }}
                    color="rgba(78, 80, 80, 1)"
                  >
                    My tote bag exceeded my expectations in every way. The
                    design matched my description perfectly, showcasing
                    outstanding quality and craftsmanship. The exceptional
                    service ensured that I received exactly what I envisioned. I
                    am thoroughly satisfied with the stylish and durable tote
                    bag, which has quickly become my go-to accessory for both
                    everyday use and special occasions.
                  </Text>
                </VStack>
              )}
            </HStack>
          ))}
        </VStack>
      </HStack>
    </>
  );
};

export default CustomerReview;
