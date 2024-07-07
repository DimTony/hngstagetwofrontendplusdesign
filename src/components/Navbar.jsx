import React from 'react';
import { Badge, Box, HStack, Image, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import UserIcon from '../assets/UserVector.png';
import ShoppingCart from '../assets/Shopping_Cart_02.png';
import hamIcon from '../assets/Menu_Alt_03.png';

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        px={{ xl: '64px', base: '24px' }}
        py={{ xl: '20px', base: '24px' }}
      >
        <HStack
          alignItems="center"
          gap="24px"
          display={{ base: 'none', xl: 'flex' }}
        >
          <NavLink to="/thetotebagshop" exact>
            {({ isActive }) => (
              <Box position="relative">
                <Text fontWeight="400" fontSize={{ md: '14px', lg: '18px' }}>
                  HOME
                </Text>
                {isActive && (
                  <Box
                    position="absolute"
                    bottom="-5px"
                    left="0"
                    w="24px"
                    h="6px"
                    bg="#003737"
                    borderRadius="20px"
                  />
                )}
              </Box>
            )}
          </NavLink>
          <NavLink to="/" exact>
            {({ isActive }) => (
              <Box position="relative">
                <Text fontWeight="400" fontSize={{ base: '14px', md: '18px' }}>
                  SHOP
                </Text>
                {isActive && (
                  <Box
                    position="absolute"
                    bottom="-5px"
                    left="0"
                    w="24px"
                    h="6px"
                    bg="#003737"
                    borderRadius="20px"
                  />
                )}
              </Box>
            )}
          </NavLink>
        </HStack>
        <Text
          fontWeight="300"
          fontFamily="Montserrat"
          fontSize={{ xl: '36.21px', base: '24px' }}
          lineHeight={{ xl: '43.46px', base: '28px' }}
          letterSpacing="-0.12px"
        >
          thetotebagshop<sup>®</sup>
        </Text>
        <HStack
          gap={{ xl: '24px', lg: '22px', md: '20px', base: '12px' }}
          alignItems="center"
        >
          <NavLink to="/profile">
            <Image
              src={UserIcon}
              alt="userProfile"
              w={{ base: '1rem', md: '1.2rem' }}
              h="auto"
            />
          </NavLink>
          <NavLink to="/cart">
            <Box position="relative">
              <Image
                src={ShoppingCart}
                alt="cartIcon"
                w={{ base: '24px', md: '1.5rem' }}
                h="auto"
              />
              <Badge
                position="absolute"
                borderRadius="full"
                variant="solid"
                bg="black"
                fontSize="sm"
                className="count_badge"
                w={{ base: '15px', md: '1rem', xl: '1.5rem' }}
                h={{ base: '15px', md: '1rem', xl: '1.5rem' }}
                transform={{
                  xl: 'translateX(40%) translateY(-160%)',
                  md: 'translateX(70%) translateY(-200%)',
                  base: 'translateX(90%) translateY(-200%)',
                }}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {cartItems.length}
              </Badge>
            </Box>
          </NavLink>

          <Image
            src={hamIcon}
            alt="menu"
            w={{ base: '24px', md: '2rem' }}
            h="auto"
            display={{ xl: 'none', md: 'flex', base: 'flex' }}
          />
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
