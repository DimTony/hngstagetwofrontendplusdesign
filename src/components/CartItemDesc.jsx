import { Skeleton, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import React from 'react';

const CartItemDesc = ({ productLoading }) => {
  const descText = useBreakpointValue({
    xl: `The Cream-Colored Totebag is a blend of elegance and functionality.
          Crafted from luxurious fabric, its spacious interior accommodates
          daily essentials. Lightweight and stylish, it's perfect for any
          occasion, offering comfort and sophistication. The tote features
          sturdy, reinforced handles for added durability, ensuring it can carry
          heavier items without compromising on style. Inside, multiple pockets
          provide organized storage, making it easy to find your keys, phone, or
          wallet. The classic cream color pairs effortlessly with any outfit,
          making it a versatile accessory for both casual and formal settings.
          Whether you're heading to work, running errands, or enjoying a night
          out, this tote bag elevates your look while providing practical
          storage solutions.`,
    lg: `The Cream-Colored Totebag is a blend of elegance and functionality.
          Crafted from luxurious fabric, its spacious interior accommodates
          daily essentials. Lightweight and stylish, it's perfect for any
          occasion, offering comfort and sophistication. The tote features
          sturdy, reinforced handles for added durability, ensuring it can carry
          heavier items without compromising on style. Inside, multiple pockets
          provide organized storage, making it easy to find your keys, phone, or
          wallet. The classic cream color pairs effortlessly with any outfit,
          making it a versatile accessory for both casual and formal settings.
          Whether you're heading to work, running errands, or enjoying a night
          out, this tote bag elevates your look while providing practical
          storage solutions.`,
    md: `The Cream-Colored Totebag is a blend of elegance and functionality.
          Crafted from luxurious fabric, its spacious interior accommodates
          daily essentials. Lightweight and stylish, it's perfect for any
          occasion, offering comfort and sophistication. The tote features
          sturdy, reinforced handles for added durability, ensuring it can carry
          heavier items without compromising on style. Inside, multiple pockets
          provide organized storage, making it easy to find your keys, phone, or
          wallet. The classic cream color pairs effortlessly with any outfit,
          making it a versatile accessory for both casual and formal settings.
          Whether you're heading to work, running errands, or enjoying a night
          out, this tote bag elevates your look while providing practical
          storage solutions.`,
    base: `The Cream-Colored Totebag is a blend of elegance and functionality. Crafted from luxurious fabric, its spacious interior accommodates daily essentials. Lightweight and stylish, it's perfect for any occasion, offering comfort and sophistication.`,
  });
  return (
    <>
      <VStack
        w="100%"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap="1rem"
      >
        <Text
          fontSize="24px"
          fontWeight="600"
          lineHeight="28.8px"
          color="rgba(0,0,0,1)"
        >
          Description
        </Text>
        {productLoading ? (
          <VStack h="20vh" w="100%" alignItems="flex-end">
            <Skeleton w="90%" h="20%" borderRadius="10px" />
            <Skeleton w="100%" h="20%" borderRadius="10px" />
            <Skeleton w="100%" h="20%" borderRadius="10px" />
            <Skeleton w="100%" h="20%" borderRadius="10px" />
            <Skeleton w="100%" h="20%" borderRadius="10px" />
          </VStack>
        ) : (
          <Text
            fontSize={{ xl: '20px', lg: '16px', md: '12px', base: '10px' }}
            fontWeight="400"
            lineHeight={{
              xl: '31.2px',
              lg: '24px',
              md: '18px',
              base: '15.6px',
            }}
            color={{
              xl: 'rgba(78, 80, 80, 1)',
              lg: 'rgba(78, 80, 80, 1)',
              md: 'rgba(78, 80, 80, 1)',
              base: 'rgba(112, 115, 115, 1)',
            }}
            fontFamily="Montserrat"
          >
            {descText}
          </Text>
        )}
      </VStack>
    </>
  );
};

export default CartItemDesc;
