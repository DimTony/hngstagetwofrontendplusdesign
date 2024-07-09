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
import { useCart } from '../contexts/CartContext';
import flex1 from '../assets/Flexscreen1.png';
import mobileFlex1 from '../assets/view port.png';
import mobileFlex2 from '../assets/Sneak 4.png';
import SearchBar from '../components/SearchBar';
import FilterButtons from '../components/FilterButtons';
import { BaseTextTemplate, TextTemplate } from '../components/TextTemplate';
import ProductGrid from '../components/ProductGrid';
import Accordion from '../components/Accordion';
import SecondAccordion from '../components/SecondAccordion';
import Footer from '../components/Footer';
import BaseFooter from '../components/BaseFooter';
import ExpandableImages from '../components/ExpandableImages';
import ImgCarousel from '../components/ImgCarousel';
import InfiniteSlider from '../components/InfiniteSlider';

const ProductListing = () => {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    handleItemAddRemove,
    isInCart,
    formatAmount,
  } = useCart();

  return (
    <>
      <VStack px={{ xl: '64px', base: '24px' }}>
        <SearchBar />
        <FilterButtons />
        <TextTemplate
          xlTop={'Shop your favourite totebag.'}
          xlBottom={'Select the totebag that matches your fashion.'}
          baseTop={'Available Stock'}
          baseBottom={'Discover our latest collection of totebags.'}
        />
        {/* Implement Carousel Logic */}
        {/* <Box
          display={{ xl: 'flex', lg: 'flex', md: 'flex', base: 'none' }}
          mb="3rem"
          w="100%"
          h="auto"
        >
          <Image src={flex1} alt="flex_carousel" />
        </Box> */}
        <ImgCarousel />
        {/* <InfiniteSlider /> */}
        {/* Implement Carousel Logic */}
        <TextTemplate
          xlTop={'Available Stock'}
          xlBottom={'These totebags are currently available for sales'}
        />
        <ProductGrid
          start={0}
          end={'First'}
          handleItemAddRemove={handleItemAddRemove}
          isInCart={isInCart}
          formatAmount={formatAmount}
        />
        <TextTemplate
          show={'no_base'}
          xlTop={'Other Stock'}
          xlBottom={'These totebags are currently available for sales'}
        />
        <Stack
          mt="1rem"
          mb="2rem"
          w="100%"
          p="17px 127.5px 17px 127.5px"
          borderRadius="25px"
          border="0.5px solid rgba(53, 53, 59, 1)"
          display={{ xl: 'none', lg: 'none', md: 'none', base: 'flex' }}
        >
          <Text textAlign="center">See More</Text>
        </Stack>
        {/* Implement Carousel Logic */}
        <Box
          display={{ xl: 'none', lg: 'none', md: 'none', base: 'flex' }}
          mb="2rem"
          w="100vw"
          h="auto"
        >
          <Image src={mobileFlex1} alt="flex_carousel" />
        </Box>
        {/* Implement Carousel Logic */}
        <ProductGrid
          start={12}
          end={'Second'}
          handleItemAddRemove={handleItemAddRemove}
          isInCart={isInCart}
          formatAmount={formatAmount}
        />
        <BaseTextTemplate
          show={'no_base'}
          baseTop={'Trends & Catalogue'}
          baseBottom={'Recent happenings In fashion events this last weekend.'}
        />
        {/* Implement Carousel Logic */}
        <Box
          display={{ xl: 'none', lg: 'none', md: 'none', base: 'flex' }}
          mb="2rem"
          w="100%"
          h="auto"
        >
          <Image src={mobileFlex2} alt="flex_carousel" />
        </Box>
        {/* Implement Carousel Logic */}
        <Text
          mb="1rem"
          w="100%"
          fontSize="24px"
          fontWeight="500"
          lineHeight="28.8px"
          color="rgba(0,0,0,1)"
          display={{ xl: 'none', lg: 'none', md: 'none', base: 'flex' }}
        >
          Blog Post
        </Text>
        <Accordion />

        <ExpandableImages />
        <ProductGrid
          start={24}
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

export default ProductListing;
