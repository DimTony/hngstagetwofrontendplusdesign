import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  VStack,
  useDisclosure,
  HStack,
  Image,
  Input,
  Stack,
  Checkbox,
} from '@chakra-ui/react';
import React from 'react';
import SearchBar from '../components/SearchBar';
import { TextTemplate } from '../components/TextTemplate';
import CheckoutCart from '../components/CheckoutCart';
import Footer from '../components/Footer';
import BaseFooter from '../components/BaseFooter';
import visaIcon from '../assets/VisaVector.png';
import StripeIcon from '../assets/StripeVector.png';
import MCIcon from '../assets/McVector.png';
import PpIcon from '../assets/PpVector.png';
import ApIcon from '../assets/ApVector.png';
import MC from '../assets/MCIcon.png';

const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <VStack px={{ xl: '64px', base: '24px' }}>
        <SearchBar />
        <TextTemplate
          xlTop={'Shopping Cart'}
          xlBottom={
            'Effortlessly manage your purchases and checkout with ease.'
          }
        />
        <CheckoutCart onOpen={onOpen} />

        <Modal isOpen={isOpen} size="xl" onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody
              p="4rem"
              bg="rgba(250, 255, 255, 0.9)"
              border="1px solid rgba(185, 191, 191, 1)"
            >
              <VStack>
                <Text
                  fontSize="32px"
                  fontWeight="600"
                  lineHeight="38.4px"
                  color="rgba(0, 22, 22, 1)"
                >
                  Payment Method
                </Text>
                <Text
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="19.2px"
                  color="rgba(47, 49, 49, 1)"
                >
                  Effortlessly manage your purchases and checkout with ease.
                </Text>
                <HStack mb="1rem" gap="12px">
                  <Image src={visaIcon} alt="visa" w="36px" h="11.63px" />
                  <Image
                    src={StripeIcon}
                    alt="stripe"
                    w="39.99px"
                    h="16.49px"
                  />
                  <Image src={MCIcon} alt="visa" w="60px" h="36px" />
                  <Image src={PpIcon} alt="visa" w="28px" h="28px" />
                  <Image src={ApIcon} alt="visa" w="28px" h="28px" />
                </HStack>
                <VStack alignItems="flex-start" w="100%">
                  <Text
                    fontSize="20px"
                    fontWeight="400"
                    lineHeight="24px"
                    color="rgba(53, 53, 59, 1)"
                  >
                    Card Number
                  </Text>
                  <HStack
                    mb="1rem"
                    w="100%"
                    spacing={0}
                    border="0.5px solid rgba(185, 191, 191, 1)"
                    borderRadius="5px"
                  >
                    <Input
                      type="number"
                      placeholder="5355 0348 5945 5045"
                      bg="rgba(241, 255, 255, 1)"
                      border="none"
                    />
                    <Stack
                      p="10px"
                      bg="rgba(241, 255, 255, 1)"
                      borderRadius="5px"
                    >
                      <Image src={MC} alt="mc" w="33px" h="20.31px" />
                    </Stack>
                  </HStack>
                  <HStack w="100%" gap="24px">
                    <VStack w="50%" alignItems="flex-start">
                      <Text
                        fontSize="20px"
                        fontWeight="400"
                        lineHeight="24px"
                        color="rgba(53, 53, 59, 1)"
                      >
                        CVV
                      </Text>
                      <Input
                        type="number"
                        placeholder="123"
                        w="100%"
                        border="0.5px solid rgba(185, 191, 191, 1)"
                        bg="rgba(241, 255, 255, 1)"
                        borderRadius="5px"
                      />
                    </VStack>
                    <VStack w="50%" alignItems="flex-start">
                      <Text
                        fontSize="20px"
                        fontWeight="400"
                        lineHeight="24px"
                        color="rgba(53, 53, 59, 1)"
                      >
                        Expires
                      </Text>
                      <Input
                        type="number"
                        placeholder="07/06/2024"
                        w="100%"
                        border="0.5px solid rgba(185, 191, 191, 1)"
                        bg="rgba(241, 255, 255, 1)"
                        borderRadius="5px"
                      />
                    </VStack>
                  </HStack>

                  <Checkbox mb="2rem" colorScheme="custom" defaultChecked>
                    <Text
                      fontFamily="Montserrat"
                      fontWeight="400"
                      fontSize="16px"
                      lineHeight="19.5px"
                      letterSpacing="-0.05px"
                      color="rgba(147, 152, 152, 1)"
                    >
                      save my debit card information
                    </Text>
                  </Checkbox>

                  <Button
                    h="56px"
                    variant="solid"
                    bg="rgba(0, 22, 22, 1)"
                    borderRadius="4.62px"
                    p="15px 176.88px 15px 176.88px"
                  >
                    <Text
                      fontSize="18.49px"
                      fontWeight="600"
                      lineHeight="25.89px"
                      color="rgba(250, 255, 255, 1)"
                    >
                      Checkout
                    </Text>
                  </Button>
                </VStack>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>

        <Footer />
        <BaseFooter />
      </VStack>
    </>
  );
};

export default Checkout;
