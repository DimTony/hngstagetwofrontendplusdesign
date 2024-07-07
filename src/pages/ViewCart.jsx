import { VStack } from '@chakra-ui/react';
import React from 'react';
import SearchBar from '../components/SearchBar';
import { TextTemplate } from '../components/TextTemplate';
import ItemCartDisplay from '../components/ItemCartDisplay';

const ViewCart = () => {
  return (
    <>
      <VStack px={{ xl: '64px', base: '24px' }}>
        <SearchBar />
        <TextTemplate
          xlTop={'Your Cart'}
          xlBottom={'Review and manage the items in your shopping cart.'}
        />
        <ItemCartDisplay />
      </VStack>
    </>
  );
};

export default ViewCart;
