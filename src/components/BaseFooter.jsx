import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const BaseFooter = () => {
  return (
    <>
      <VStack
        bg="url('src/assets/Graph.png')"
        bgColor="black"
        backgroundSize="contain"
        backgroundRepeat="repeat-y"
        backgroundPosition="center"
        w="100vw"
        h="751px"
        justifyContent="center"
        alignItems="flex-start"
        position="relative"
        display={{ xl: 'none', lg: 'none', md: 'none', base: 'flex' }}
        px="2rem"
      >
        <Text
          fontWeight="300"
          fontFamily="Montserrat"
          fontSize="29.63px"
          lineHeight="35.55px"
          color="rgba(250, 255, 255, 1)"
          mb="1rem"
        >
          thetotebagshop<sup className="bg_trans">®</sup>
        </Text>
        <Text
          fontSize="16px"
          fontWeight="400"
          lineHeight="24.96px"
          textAlign="center"
          color="rgba(250, 255, 255, 1)"
          mb="1rem"
        >
          We provide comfy tote bags that won't mess up your style and have
          plenty of space for all your stuff.
        </Text>
        <VStack w="100%" mb="1rem">
          <Text
            fontWeight="800"
            fontSize="18px"
            lineHeight="25.2px"
            color="rgba(255, 255, 255, 1)"
          >
            Quick links
          </Text>
          <Text
            fontWeight="400"
            fontSize="14px"
            lineHeight="19.px"
            color="rgba(255, 255, 255, 1)"
          >
            Terms & Conditions
          </Text>
          <Text
            fontWeight="400"
            fontSize="14px"
            lineHeight="19.px"
            color="rgba(255, 255, 255, 1)"
          >
            Privacy Policy
          </Text>
          <Text
            fontWeight="400"
            fontSize="14px"
            lineHeight="19.px"
            color="rgba(255, 255, 255, 1)"
          >
            Contact Us
          </Text>
          <Text
            fontWeight="400"
            fontSize="14px"
            lineHeight="19.px"
            color="rgba(255, 255, 255, 1)"
          >
            Terms of Service
          </Text>
          <Text
            fontWeight="400"
            fontSize="14px"
            lineHeight="19.px"
            color="rgba(255, 255, 255, 1)"
          >
            Refund Policy
          </Text>
        </VStack>
        <Text
          fontSize="24px"
          lineHeight="33.6px"
          fontWeight="800"
          color="rgba(255, 255, 255, 1)"
          w="100%"
          textAlign="center"
          mb="1rem"
        >
          Connect with Us
        </Text>
        <Text
          fontSize="16px"
          fontWeight="400"
          lineHeight="24.96px"
          textAlign="center"
          color="rgba(250, 255, 255, 1)"
          mb="1rem"
        >
          Subscribe to our Newsletter to be the first to be aware of recent
          production and other production offers.
        </Text>
        <Box w="100%" px="2rem" mb="2rem">
          <HStack
            bg="rgba(46, 48, 48, 1)"
            borderRadius="12px"
            w="100%"
            p="16px 30px 16px 24px"
            justifyContent="space-between"
          >
            <Text color="rgba(147, 152, 152, 1)" bg="transparent">
              Enter email address
            </Text>
            <Box
              bg="rgba(0, 20, 20, 1)"
              w="40px"
              h="40px"
              border="0.5px solid rgba(46, 48, 48, 1)"
              borderRadius="8px"
              p="8px"
              opacity="70%"
            >
              <Image
                bg="transparent"
                src="src/assets/Arrow_Right_LG.png"
                alt="arrow"
              />
            </Box>
          </HStack>
        </Box>

        <HStack w="100%" alignItems="center" justifyContent="center">
          <Image
            src="src/assets/ic_sharp-tiktok.png"
            alt="tk"
            w="24px"
            h="24px"
          />
          <Image src="src/assets/fe_instagram.png" alt="ig" w="24px" h="24px" />
          <Image src="src/assets/Group.png" alt="wa" w="24px" h="24px" />
        </HStack>
      </VStack>
    </>
  );
};

export default BaseFooter;
