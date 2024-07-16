import { Box, Image, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { TextTemplate } from '../components/TextTemplate';
import ItemCartDisplay from '../components/ItemCartDisplay';
import CartItemDesc from '../components/CartItemDesc';
import CustomerReview from '../components/CustomerReview';
import ProductGrid from '../components/ProductGrid';
import { useCart } from '../contexts/CartContext';
import Footer from '../components/Footer';
import BaseFooter from '../components/BaseFooter';
import mobileFlex1 from '../assets/view port.png';
import { useParams } from 'react-router-dom';

const ViewCart = () => {
  const [productLoading, setProductLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [bigDisplayPic, setBigDisplayPic] = useState(null);

  const { handleItemAddRemove, isInCart, formatAmount } = useCart();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const appId = import.meta.env.VITE_APP_ID;
      const orgId = import.meta.env.VITE_ORG_ID;

      try {
        const response = await axios.get(
          `https://timbu-get-single-product.reavdev.workers.dev/${id}?organization_id=${orgId}&Appid=${appId}&Apikey=${apiKey}`
        );

        setProduct(response.data);
        setProductLoading(false);
        // Set bigDisplayPic based on breakpoint value after data is fetched
        const picUrl = `https://api.timbu.cloud/images/${response.data.photos[0].url}`;
        const bigPic = useBreakpointValue({
          xl: picUrl,
          base: picUrl,
        });
        setBigDisplayPic(bigPic);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <VStack px={{ xl: '64px', base: '24px' }}>
        <SearchBar />
        <TextTemplate
          xlTop={'Your Cart'}
          xlBottom={'Review and manage the items in your shopping cart.'}
        />

        <ItemCartDisplay
          productId={id}
          product={product}
          bigDisplayPic={bigDisplayPic}
          productLoading={productLoading}
          setProductLoading={setProductLoading}
        />
        <CartItemDesc
          productLoading={productLoading}
          setProductLoading={setProductLoading}
        />

        <CustomerReview productLoading={productLoading} />

        <TextTemplate
          xlTop={'Totebags you may like'}
          xlBottom={'Similar totebags like the one selected.'}
        />
        <ProductGrid
          start={24}
          end={'Third'}
          handleItemAddRemove={handleItemAddRemove}
          isInCart={isInCart}
          formatAmount={formatAmount}
        />
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
        <Box display={{ xl: 'none', lg: 'none', md: 'none', base: 'flex' }}>
          <CustomerReview />
        </Box>
        <Footer />
        <BaseFooter />
      </VStack>
    </>
  );
};

export default ViewCart;
