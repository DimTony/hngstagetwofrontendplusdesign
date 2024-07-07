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
} from '@chakra-ui/react';
import React from 'react';
import SearchBar from '../components/SearchBar';
import { TextTemplate } from '../components/TextTemplate';
import CheckoutCart from '../components/CheckoutCart';
import Footer from '../components/Footer';
import BaseFooter from '../components/BaseFooter';

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

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>I'll finish this before noon</Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Footer />
        <BaseFooter />
      </VStack>
    </>
  );
};

export default Checkout;
