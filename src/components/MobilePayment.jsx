import {
  Box,
  Button,
  Checkbox,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import LocIcon from '../assets/LocVector.png';
import { AddIcon, EditIcon } from '@chakra-ui/icons';
import atmBlackIcon from '../assets/AtmBlackVector.png';
import AtmStripe from '../assets/CardStrip.png';
import MCLarge from '../assets/Mastercard.png';
import mcIcon from '../assets/Group 5.png';
import mobileFlex1 from '../assets/view port.png';

const MobilePayment = () => {
  return (
    <>
      <HStack w="100%" my="1rem">
        <Image src={LocIcon} alt="loc" w="100px" h="100px" />
        <VStack alignItems="flex-start" w="100%">
          <Text
            fontWeight="600"
            fontSize="14px"
            lineHeight="16.44px"
            color="rgba(0,0,0,1)"
          >
            Destination
          </Text>
          <Text
            fontWeight="400"
            fontSize="17px"
            lineHeight="18.72px"
            color="rgba(78, 80, 80, 1)"
          >
            No 7, Allen street off ojuelegba bus-stop, lagos Nigeria.
          </Text>
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
      <Stack
        mb="1rem"
        justifyContent="center"
        alignItems="center"
        bg="rgba(203, 199, 199, 0.2)"
        w="100%"
        h="214px"
        p="1rem"
      >
        <VStack
          bg="rgba(3, 4, 94, 1)"
          borderRadius="4.54px"
          border="0.28px solid rgba(255, 255, 255, 0.55)"
          w="100%"
          h="190px"
          py="1rem"
          px="2rem"
        >
          <HStack
            justifyContent="space-between"
            w="100%"
            alignItems="flex-start"
          >
            <Text
              color="rgba(255, 251, 251, 1)"
              fontSize="9.75px"
              fontWeight="700"
              lineHeight="12.24px"
            >
              Debit
            </Text>
            <VStack color="rgba(255, 251, 251, 1)" alignItems="flex-end">
              <Text
                fontFamily="Mulish"
                fontSize="13.01px"
                fontWeight="800"
                lineHeight="16.32px"
              >
                Bank Name
              </Text>
              <Text
                fontFamily="Mulish"
                fontSize="9.03px"
                fontWeight="700"
                lineHeight="11.34px"
              >
                & Logo
              </Text>
            </VStack>
          </HStack>
          <HStack w="100%" alignItems="flex-start">
            <Image src={AtmStripe} alt="stripe" w="27.22px" h="20.92px" />
          </HStack>
          <HStack w="100%" justifyContent="space-between">
            <Text
              fontFamily="Mulish"
              fontWeight="600"
              fontSize="19.51px"
              lineHeight="24.48px"
              letterSpacing="5%"
              color="rgba(255, 251, 251, 1)"
            >
              5355
            </Text>
            <Text
              fontFamily="Mulish"
              fontWeight="600"
              fontSize="19.51px"
              lineHeight="24.48px"
              letterSpacing="5%"
              color="rgba(255, 251, 251, 1)"
            >
              0348
            </Text>
            <Text
              fontFamily="Mulish"
              fontWeight="600"
              fontSize="19.51px"
              lineHeight="24.48px"
              letterSpacing="5%"
              color="rgba(255, 251, 251, 1)"
            >
              5945
            </Text>
            <Text
              fontFamily="Mulish"
              fontWeight="600"
              fontSize="19.51px"
              lineHeight="24.48px"
              letterSpacing="5%"
              color="rgba(255, 251, 251, 1)"
            >
              5045
            </Text>
          </HStack>
          <HStack w="100%">
            <VStack>
              <Text
                fontFamily="Mulish"
                fontWeight="600"
                fontSize="4.88px"
                lineHeight="6.12px"
                color="rgba(255, 251, 251, 1)"
                noOfLines={2}
              >
                VALID
              </Text>
              <Text
                fontFamily="Mulish"
                fontWeight="600"
                fontSize="4.88px"
                lineHeight="6.12px"
                color="rgba(255, 251, 251, 1)"
                noOfLines={2}
              >
                THRU
              </Text>
            </VStack>
            <Text
              fontFamily="Mulish"
              fontWeight="600"
              fontSize="9.75px"
              lineHeight="12.24px"
              color="rgba(255, 251, 251, 1)"
            >
              12/24
            </Text>
          </HStack>

          <HStack w="100%" justifyContent="space-between">
            <Text
              fontFamily="Mulish"
              fontSize="9.75px"
              fontWeight="700"
              lineHeight="12.24px"
              color="rgba(255, 251, 251, 1)"
            >
              CIROMA CHINEYE ADEKUNLE
            </Text>
            <Image src={MCLarge} alt="mc" w="44.24px" h="35.73px" />
          </HStack>
        </VStack>
      </Stack>

      <Stack mb="1rem" w="100%" justifyContent="flex-end" alignItems="flex-end">
        <HStack
          py="0.6rem"
          px="1rem"
          border="0.2px solid rgba(224, 231, 231, 1)"
        >
          <Stack borderRadius="4px" bg="rgba(224, 231, 231, 1)" p="0.4rem">
            <AddIcon w="20px" h="20px" />
          </Stack>
          <Text
            fontSize="14px"
            fontWeight="400"
            lineHeight="11.74px"
            letterSpacing="-0.06px"
            color="rgba(78, 80, 80, 1)"
          >
            Add a new card
          </Text>
        </HStack>
      </Stack>

      <VStack mb="0.5rem" w="100%" alignItems="flex-start">
        <Text>Card Number</Text>
        <HStack
          w="100%"
          borderRadius="8px"
          border="0.5px solid rgba(0, 128, 127, 1)"
          py="0.5rem"
          px="1rem"
          spacing={0}
        >
          <Input
            placeholder="5355  0348  5945  5045"
            type="number"
            border="none"
            p="0"
          />
          <Stack>
            <Image src={mcIcon} alt="badge" w="33px" h="20.31px" />
          </Stack>
        </HStack>
      </VStack>

      <HStack w="100%" gap="24px">
        <VStack w="50%" alignItems="flex-start">
          <Text>CVV</Text>
          <HStack
            w="100%"
            borderRadius="8px"
            border="0.5px solid rgba(0, 128, 127, 1)"
            py="0.5rem"
            px="1rem"
            spacing={0}
          >
            <Input placeholder="0522" type="number" border="none" p="0" />
          </HStack>
        </VStack>
        <VStack w="50%" alignItems="flex-start">
          <Text>Expires</Text>
          <HStack
            w="100%"
            borderRadius="8px"
            border="0.5px solid rgba(0, 128, 127, 1)"
            py="0.5rem"
            px="1rem"
            spacing={0}
          >
            <Input placeholder="05/2024" type="number" border="none" p="0" />
          </HStack>
        </VStack>
      </HStack>

      <Checkbox mb="2rem" colorScheme="custom" defaultChecked>
        <Text
          fontFamily="Montserrat"
          fontWeight="400"
          fontSize="12px"
          lineHeight="14.63px"
          letterSpacing="-0.05px"
          color="rgba(147, 152, 152, 1)"
        >
          save my debit card information
        </Text>
      </Checkbox>

      <HStack mb="2rem" w="100%" justifyContent="center" alignItems="center">
        <Button
          w="95%"
          h="48px"
          variant="solid"
          bg="rgba(0, 22, 22, 1)"
          color="rgba(250, 255, 255, 1)"
          fontSize="16px"
          lineHeight="22.4px"
          p="13px 118.5px 13px 118.5px"
        >
          Checkout
        </Button>
      </HStack>

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

export default MobilePayment;
