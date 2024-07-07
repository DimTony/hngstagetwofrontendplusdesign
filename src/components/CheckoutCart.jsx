import { HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import ItemPic from '../assets/Card 4.png';
import star from '../assets/one.png';
import unstar from '../assets/Five.png';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import TrashIcon from '../assets/TrashVector.png';
import badgeIcon from '../assets/WarnVector.png';
import atmIcon from '../assets/AtmVector.png';

const CheckoutCart = () => {
  const totals = [
    {
      name: 'Subtotal',
      amount: 'N4,000.00',
    },
    {
      name: 'Delivery',
      amount: 'N1,500.00',
    },
    {
      name: 'Zip',
      amount: 'N1,000.00',
    },
    {
      name: 'Front & Back Designs',
      amount: 'N1,000.00',
    },
  ];
  return (
    <>
      <HStack w="100%" justifyContent="space-between" alignItems="flex-start">
        <VStack w="963.88px">
          {[1, 2, 3, 4].map((item, index) => (
            <HStack
              key={index}
              justifyContent="space-between"
              w="100%"
              p="12px 16px 32px 16px"
              borderBottom="0.5px solid rgba(186, 192, 192, 1)"
            >
              <HStack>
                <Image src={ItemPic} alt="item" w="128.02px" h="140px" />
                <VStack
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  h="140px"
                >
                  <Text
                    fontSize="28px"
                    lineHeight="33.6px"
                    fontWeight="500"
                    color="rgba(0, 22, 22, 1)"
                  >
                    Plane totebag
                  </Text>
                  <Text
                    fontSize="18px"
                    lineHeight="21.6px"
                    fontWeight="400"
                    color="rgba(78, 80, 80, 1)"
                  >
                    thetotebag1500
                  </Text>
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
                  <HStack>
                    <Text
                      fontSize="20px"
                      lineHeight="24px"
                      fontWeight="500"
                      fontFamily="Montserrat"
                      color="rgba(185, 191, 191, 1)"
                    >
                      Color:
                    </Text>
                    <Text
                      fontSize="18px"
                      lineHeight="21.6px"
                      fontWeight="400"
                      fontFamily="Montserrat"
                      color="rgba(0, 21, 21, 1)"
                    >
                      Cream
                    </Text>
                  </HStack>
                </VStack>
              </HStack>

              <HStack gap="64px">
                <HStack
                  borderRadius="6.21px"
                  border="0.62px solid rgba(224, 231, 231, 1)"
                  p="7.57px"
                >
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
                <Text
                  fontWeight="700"
                  fontFamily="Montserrat"
                  fontSize="25.33px"
                  lineHeight="40.53px"
                  letterSpacing="-0.01em"
                >
                  N4,000
                </Text>
              </HStack>

              <Stack p="10px" bg="rgba(0, 22, 22, 1)">
                <Image src={TrashIcon} alt="trash" w="18.67px" h="21px" />
              </Stack>
            </HStack>
          ))}
        </VStack>
        <VStack w="487.35px">
          <VStack
            w="100%"
            bg="rgba(224, 231, 231, 0.1)"
            borderRadius="8px"
            border="0.5px solid rgba(224, 231, 231, 1)"
            alignItems="flex-start"
            p="32px 32px 32px 32px"
          >
            <Text
              mb="2rem"
              fontWeight="700"
              fontSize="24px"
              lineHeight="28.8px"
              letterSpacing="-0.01em"
              color="rgba(78, 80, 80, 1)"
            >
              Order Summary
            </Text>
            <VStack w="100%">
              {totals.map((item, index) => (
                <HStack w="100%" justifyContent="space-between" mb="2rem">
                  <Text
                    fontFamily="Montserrat"
                    fontSize="18px"
                    fontWeight="400"
                    lineHeight="21.6px"
                    letterSpacing="-0.01em"
                    color="rgba(78, 80, 80, 1)"
                  >
                    {/* Subtotal */}
                    {item.name}
                  </Text>
                  <Text
                    fontFamily="Montserrat"
                    fontSize="18px"
                    fontWeight="700"
                    lineHeight="28.8px"
                    letterSpacing="-0.01em"
                    color="rgba(0, 22, 22, 1)"
                  >
                    {/* N4,000.00 */}
                    {item.amount}
                  </Text>
                </HStack>
              ))}
            </VStack>
            <HStack
              p="16px 0px 16px 0px"
              w="100%"
              justifyContent="space-between"
              borderTop="0.5px solid rgba(185, 191, 191, 1)"
              borderBottom="0.5px solid rgba(185, 191, 191, 1)"
            >
              <Text
                fontWeight="700"
                fontSize="24px"
                lineHeight="28.8px"
                letterSpacing="-0.01em"
                color="rgba(0,0,0,1)"
              >
                Total
              </Text>
              <Text
                fontFamily="Montserrat"
                fontWeight="700"
                fontSize="18px"
                lineHeight="28.8px"
                letterSpacing="-0.01em"
                color="rgba(0,22,22,1)"
              >
                N7,500.00
              </Text>
            </HStack>

            <HStack
              mt="1rem"
              borderRadius="8px"
              border="0.5px solid rgba(224, 231, 231, 1)"
              p="8px"
              gap="4px"
              bg="rgba(224, 231, 231, 0.3)"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Image src={badgeIcon} alt="badge" w="24px" h="24px" />
              <Text noOfLines={2}>
                Please your totebag will be delivered in three to five working
                days.
              </Text>
            </HStack>
          </VStack>

          <Stack
            p="16px 253.47px 16px 16px"
            w="100%"
            bg="rgba(0, 22, 22, 1)"
            borderRadius="8.01px"
            border="0.64px solid rgba(224, 231, 231, 1)"
          >
            <HStack gap="10px">
              <Text
                fontSize="16px"
                fontWeight="500"
                lineHeight="21.76px"
                color="rgba(235, 247, 247, 1)"
              >
                Payment options
              </Text>
              <Image src={atmIcon} alt="atm" w="15.44px" h="12.01px" />
            </HStack>
          </Stack>
        </VStack>
      </HStack>
    </>
  );
};

export default CheckoutCart;
