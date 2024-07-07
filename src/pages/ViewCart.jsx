import { VStack } from '@chakra-ui/react';
import React from 'react';
import SearchBar from '../components/SearchBar';
import { TextTemplate } from '../components/TextTemplate';
import ItemCartDisplay from '../components/ItemCartDisplay';
import CartItemDesc from '../components/CartItemDesc';
import CustomerReview from '../components/CustomerReview';
import ProductGrid from '../components/ProductGrid';
import { useCart } from '../contexts/CartContext';
import Footer from '../components/Footer';
import BaseFooter from '../components/BaseFooter';

const ViewCart = () => {
  const { handleItemAddRemove, isInCart, formatAmount } = useCart();
  return (
    <>
      <VStack px={{ xl: '64px', base: '24px' }}>
        <SearchBar />
        <TextTemplate
          xlTop={'Your Cart'}
          xlBottom={'Review and manage the items in your shopping cart.'}
        />
        <ItemCartDisplay />
        <CartItemDesc />

        <CustomerReview />

        <TextTemplate
          xlTop={'Totebags you may like'}
          xlBottom={'Similar totebags like the one selected.'}
        />
        <ProductGrid
          start={32}
          end={'Third'}
          handleItemAddRemove={handleItemAddRemove}
          isInCart={isInCart}
          formatAmount={formatAmount}
        />
        <Footer />
        <BaseFooter />
      </VStack>
    </>
  );
};

export default ViewCart;
