import { VStack } from '@chakra-ui/react';
import React from 'react';
import SearchBar from '../components/SearchBar';
import { TextTemplate } from '../components/TextTemplate';
import CheckoutCart from '../components/CheckoutCart';
import Footer from '../components/Footer';
import BaseFooter from '../components/BaseFooter';

const Checkout = () => {
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
        <CheckoutCart />

        <Footer />
        <BaseFooter />
      </VStack>
    </>
  );
};

export default Checkout;
