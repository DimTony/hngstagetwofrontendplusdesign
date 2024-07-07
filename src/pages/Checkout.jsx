import { VStack } from '@chakra-ui/react';
import React from 'react';
import SearchBar from '../components/SearchBar';
import { TextTemplate } from '../components/TextTemplate';

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
      </VStack>
    </>
  );
};

export default Checkout;
