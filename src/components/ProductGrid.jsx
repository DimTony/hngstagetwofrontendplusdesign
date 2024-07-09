import {
  Box,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { products } from '../assets/products';
import React from 'react';

const ProductGrid = ({
  start,
  end,
  handleItemAddRemove,
  formatAmount,
  isInCart,
}) => {
  let GridEnd;
  let mbottom;
  if (end === 'First') {
    GridEnd = useBreakpointValue({
      base: 8,
      md: 12,
      lg: 12,
      xl: 12,
    });
    mbottom = useBreakpointValue({
      base: '0',
      md: '1rem',
      lg: '1rem',
      xl: '1rem',
    });
  } else if (end === 'Second') {
    GridEnd = useBreakpointValue({
      base: 20,
      md: 24,
      lg: 24,
      xl: 24,
    });
    mbottom = useBreakpointValue({
      base: '2rem',
      md: '1rem',
      lg: '1rem',
      xl: '1rem',
    });
  } else if (end === 'Third') {
    GridEnd = useBreakpointValue({
      base: 20,
      md: 40,
      lg: 40,
      xl: 40,
    });
    mbottom = useBreakpointValue({
      base: '2rem',
      md: '1rem',
      lg: '1rem',
      xl: '1rem',
    });
  } else {
    GridEnd = useBreakpointValue({
      base: 20,
      md: 30,
      lg: 32,
      xl: 32,
    });
    mbottom = useBreakpointValue({
      base: '2rem',
      md: '0',
      lg: '0',
      xl: '1rem',
    });
  }

  return (
    <>
      {/* <VStack mb={mbottom} w="100vw" justifyContent="space-between">
        <Box
          display="grid"
          gridTemplateColumns={{
            base: 'repeat(2, 1fr)',
            xl: 'repeat(4, 1fr)',
          }}
          gap={{ base: '20px', md: '30px' }}
        >
          {products.slice(start, GridEnd).map((product) => (
            <VStack
              key={product.id}
              // w={{ xl: '340px', lg: '230px', md: '220px', base: '156px' }}
              h="auto"
              gap="24px"
              _hover={{
                '& .hstack_child': {
                  display: 'none',
                },
                '& .stack_child': {
                  display: 'flex',
                },
              }}
              cursor="pointer"
              onClick={() => handleItemAddRemove(product)}
            >
              <Image w="310px" h="339px" src={product.image} alt="productImg" />
              <HStack
                justifyContent="space-between"
                w="100%"
                h="58.48px"
                bg="transparent"
                className="hstack_child"
                display={isInCart(product.id) ? 'none' : 'flex'}
              >
                <VStack alignItems="flex-start" spacing={0}>
                  <Text
                    fontWeight={{
                      xl: '600',
                      lg: '500',
                      md: '500',
                      base: '400',
                    }}
                    fontSize={{
                      xl: '20px',
                      lg: '18px',
                      md: '17px',
                      base: '16px',
                    }}
                    lineHeight={{
                      xl: '23.48px',
                      lg: '21px',
                      md: '20px',
                      base: '19.2px',
                    }}
                    color="rgba(0, 21, 21, 1)"
                  >
                    {product.name}
                  </Text>
                  <Text
                    display={{
                      xl: 'flex',
                      lg: 'flex',
                      md: 'flex',
                      base: 'none',
                    }}
                    fontWeight="400"
                    fontSize={{
                      xl: '14px',
                      lg: '13px',
                      md: '11px',
                      base: '8px',
                    }}
                    lineHeight="16.44px"
                    color="rgba(112, 115, 115, 1)"
                  >
                    {product.seller}
                  </Text>
                </VStack>
                <Text
                  fontWeight="600"
                  fontSize={{
                    xl: '18px',
                    lg: '17px',
                    md: '16px',
                    base: '14px',
                  }}
                  lineHeight={{
                    xl: '21.13px',
                    lg: '20px',
                    md: '18px',
                    base: '17.07px',
                  }}
                  color={{
                    xl: 'rgba(0,0,0,1)',
                    lg: 'rgba(0,0,0,1)',
                    md: 'rgba(0,0,0,1)',
                    base: 'rgba(0,22,22,1)',
                  }}
                >
                  {formatAmount(product.amount)}
                </Text>
              </HStack>
              <Stack
                display={isInCart(product.id) ? 'flex' : 'none'}
                className="stack_child"
                bg={isInCart(product.id) ? 'rgba(0, 54, 54, 1)' : 'transparent'}
                w="100%"
                h="58.48px"
                borderRadius="30px"
                border="0.5px solid rgba(147, 152, 152, 1)"
                alignItems="center"
                justifyContent="center"
                p="16px 24px 16px 24px"
              >
                <Text
                  color={
                    isInCart(product.id) ? '#ffffff' : 'rgba(53, 53, 59, 1)'
                  }
                  fontSize={{
                    xl: '20px',
                    lg: '17px',
                    md: '15px',
                    base: '11px',
                  }}
                  lineHeight={{
                    xl: '24px',
                    lg: '20px',
                    md: '15px',
                    base: '13.2px',
                  }}
                >
                  {isInCart(product.id) ? 'Added To Cart' : 'Shop This'}
                </Text>
              </Stack>
            </VStack>
          ))}
        </Box>
      </VStack> */}

      <VStack w="100%">
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4} w="100%">
          {products.slice(start, GridEnd).map((product) => (
            <Box
              key={product.id}
              w="100%"
              h="426px"
              cursor="pointer"
              onClick={() => handleItemAddRemove(product)}
              _hover={{
                '& .hstack_child': {
                  display: 'none',
                },
                '& .stack_child': {
                  display: 'flex',
                },
              }}
            >
              <Image
                w="310px"
                h="339px"
                src={product.image}
                alt="productImg"
                mb="24px"
              />
              <HStack
                justifyContent="space-between"
                w="100%"
                h="58.48px"
                bg="transparent"
                className="hstack_child"
                display={isInCart(product.id) ? 'none' : 'flex'}
              >
                <VStack alignItems="flex-start" spacing={0}>
                  <Text
                    fontWeight={{
                      xl: '600',
                      lg: '500',
                      md: '500',
                      base: '400',
                    }}
                    fontSize={{
                      xl: '20px',
                      lg: '18px',
                      md: '17px',
                      base: '16px',
                    }}
                    lineHeight={{
                      xl: '23.48px',
                      lg: '21px',
                      md: '20px',
                      base: '19.2px',
                    }}
                    color="rgba(0, 21, 21, 1)"
                  >
                    {product.name}
                  </Text>
                  <Text
                    display={{
                      xl: 'flex',
                      lg: 'flex',
                      md: 'flex',
                      base: 'none',
                    }}
                    fontWeight="400"
                    fontSize={{
                      xl: '14px',
                      lg: '13px',
                      md: '11px',
                      base: '8px',
                    }}
                    lineHeight="16.44px"
                    color="rgba(112, 115, 115, 1)"
                  >
                    {product.seller}
                  </Text>
                </VStack>
                <Text
                  fontWeight="600"
                  fontSize={{
                    xl: '18px',
                    lg: '17px',
                    md: '16px',
                    base: '14px',
                  }}
                  lineHeight={{
                    xl: '21.13px',
                    lg: '20px',
                    md: '18px',
                    base: '17.07px',
                  }}
                  color={{
                    xl: 'rgba(0,0,0,1)',
                    lg: 'rgba(0,0,0,1)',
                    md: 'rgba(0,0,0,1)',
                    base: 'rgba(0,22,22,1)',
                  }}
                >
                  {formatAmount(product.amount)}
                </Text>
              </HStack>
              <Stack
                display={isInCart(product.id) ? 'flex' : 'none'}
                className="stack_child"
                bg={isInCart(product.id) ? 'rgba(0, 54, 54, 1)' : 'transparent'}
                w="100%"
                h="58.48px"
                borderRadius="30px"
                border="0.5px solid rgba(147, 152, 152, 1)"
                alignItems="center"
                justifyContent="center"
                p="16px 24px 16px 24px"
              >
                <Text
                  color={
                    isInCart(product.id) ? '#ffffff' : 'rgba(53, 53, 59, 1)'
                  }
                  fontSize={{
                    xl: '20px',
                    lg: '17px',
                    md: '15px',
                    base: '11px',
                  }}
                  lineHeight={{
                    xl: '24px',
                    lg: '20px',
                    md: '15px',
                    base: '13.2px',
                  }}
                >
                  {isInCart(product.id) ? 'Added To Cart' : 'Shop This'}
                </Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default ProductGrid;
