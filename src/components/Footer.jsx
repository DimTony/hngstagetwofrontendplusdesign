import React from 'react';
import {
  Box,
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import GraphBg from '../assets/Graph.png';
import tiktokIcon from '../assets/ic_sharp-tiktok.png';
import igIcon from '../assets/fe_instagram.png';
import copyrightIcon from '../assets/copyVector.png';
import arrowIcon from 'src/assets/Arrow_Right_LG.png';

const Footer = () => {
  return (
    <>
      <VStack
        bgImage={`url(${GraphBg})`}
        backgroundSize="cover"
        backgroundPosition="center"
        w="100vw"
        h={{ xl: '736px', lg: '736px', md: '736px', base: '751px' }}
        justifyContent="center"
        alignItems="center"
        position="relative"
        display={{ xl: 'flex', lg: 'flex', md: 'flex', base: 'none' }}
      >
        <HStack
          justifyContent="space-between"
          gap={{ md: '60px', lg: '60pxpx' }}
          w="100%"
          h="591px"
          px={{ xl: '164px', lg: '70px', md: '70px', base: '60px' }}
          zIndex="1"
          position="absolute"
          bg="transparent"
          pt="6rem"
        >
          <VStack
            w={{ base: '100%', md: '35%', lg: '30%', xl: '50%' }}
            h="100%"
            bg="transparent"
            alignItems="flex-start"
            pt="6rem"
            gap="74px"
          >
            <Text
              fontWeight="500"
              fontSize={{ xl: '18px', lg: '16px', md: '14px', base: '12px' }}
              lineHeight="31.2px"
              color="rgba(250, 255, 255, 1)"
              textAlign="left"
              w="100%"
            >
              We provide comfy tote bags that wont mess up your style and have
              plenty of space for all your stuff.
            </Text>

            <Text
              bg="transparent"
              fontWeight="300"
              fontFamily="Montserrat"
              fontSize={{ xl: '2rem', lg: '14px', md: '20px', base: '24px' }}
              lineHeight={{ base: '28px', md: '43.46px' }}
              color="rgba(255, 255, 255, 1)"
            >
              thetotebagshop<sup className="bg_trans">®</sup>
            </Text>
            <HStack bg="transparent" gap="24px" w="96px" h="36px">
              <Image
                bg="transparent"
                src={tiktokIcon}
                alt="tk"
                w="36px"
                h="36px"
              />
              <Image bg="transparent" src={igIcon} alt="ig" w="36px" h="36px" />
            </HStack>
          </VStack>
          <VStack
            w={{ base: '100%', md: '40%', xl: '30%' }}
            pt="6rem"
            bg="transparent"
            h="100%"
            alignItems="center"
          >
            <Text
              bg="transparent"
              fontWeight="800"
              fontSize="28px"
              lineHeight="39.2px"
              color="rgba(255, 255, 255, 1)"
              mb="1rem"
              textAlign="flex-start"
              w="100%"
            >
              Quick links
            </Text>
            <VStack w="100%" bg="transparent" alignItems="flex-start">
              <Text
                bg="transparent"
                fontWeight="500"
                fontSize={{ xl: '18px', lg: '16px', md: '14px', base: '12px' }}
                lineHeight="25.2px"
                color="rgba(255, 255, 255, 1)"
              >
                Terms & Conditions
              </Text>
              <Text
                bg="transparent"
                fontWeight="500"
                fontSize={{ xl: '18px', lg: '16px', md: '14px', base: '12px' }}
                lineHeight="25.2px"
                color="rgba(255, 255, 255, 1)"
              >
                Privacy Policy
              </Text>
              <Text
                bg="transparent"
                fontWeight="500"
                fontSize={{ xl: '18px', lg: '16px', md: '14px', base: '12px' }}
                lineHeight="25.2px"
                color="rgba(255, 255, 255, 1)"
              >
                Contact Us
              </Text>
              <Text
                bg="transparent"
                fontWeight="500"
                fontSize={{ xl: '18px', lg: '16px', md: '14px', base: '12px' }}
                lineHeight="25.2px"
                color="rgba(255, 255, 255, 1)"
              >
                Terms of Service
              </Text>
              <Text
                bg="transparent"
                fontWeight="500"
                fontSize={{ xl: '18px', lg: '16px', md: '14px', base: '12px' }}
                lineHeight="25.2px"
                color="rgba(255, 255, 255, 1)"
              >
                Refund Policy
              </Text>
            </VStack>
          </VStack>
          <VStack
            pt="6rem"
            bg="transparent"
            h="100%"
            w="387px"
            justifyContent="space-between"
          >
            <VStack bg="transparent" alignItems="flex-start" gap="24px">
              <Text
                bg="transparent"
                fontWeight="800"
                fontSize="28px"
                lineHeight="39.2px"
                color="rgba(255, 255, 255, 1)"
                mb="1rem"
              >
                Connect with Us
              </Text>
              <Text
                bg="transparent"
                fontWeight="500"
                fontSize={{ xl: '18px', lg: '16px', md: '14px', base: '12px' }}
                lineHeight="28.08px"
                color="rgba(255, 255, 255, 1)"
              >
                Subscribe to our Newsletter to be the first tobe aware of recent
                production and other production offers.
              </Text>

              <HStack
                bg="rgba(46, 48, 48, 1)"
                borderRadius="12px"
                w="100%"
                p={{
                  xl: '16px 30px 16px 24px',
                  lg: '14px 30px 14px 24px',
                  md: '10px 14px 10px 14px',
                  base: '16px 30px 16px 24px',
                }}
                justifyContent="space-between"
              >
                <Text
                  fontSize={{
                    xl: '16px',
                    lg: '14px',
                    md: '10px',
                    base: '10px',
                  }}
                  color="rgba(147, 152, 152, 1)"
                  bg="transparent"
                >
                  Enter email address
                </Text>
                <Box
                  bg="rgba(0, 20, 20, 1)"
                  w={{ xl: '40px', lg: '35px', md: '30px', base: '25px' }}
                  h={{ xl: '40px', lg: '35px', md: '30px', base: '25px' }}
                  border="0.5px solid rgba(46, 48, 48, 1)"
                  borderRadius="8px"
                  p="8px"
                  opacity="70%"
                >
                  <Image bg="transparent" src={arrowIcon} alt="arrow" />
                </Box>
              </HStack>
            </VStack>
            <HStack
              w="100%"
              alignItems="flex-end"
              justifyContent="flex-end"
              bg="transparent"
            >
              <Image
                bg="transparent"
                src={copyrightIcon}
                w="14px"
                h="14px"
                alt="copyright"
              />
              <Text
                bg="transparent"
                fontWeight="400"
                fontSize="14px"
                lineHeight="19.6px"
                color="rgba(185,191, 191, 1)"
              >
                thetotebagshop 2024.
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};

export default Footer;
