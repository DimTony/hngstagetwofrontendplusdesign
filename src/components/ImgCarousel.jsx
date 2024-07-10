import React, { useEffect, useState } from 'react';
import {
  Box,
  Image,
  Text,
  Flex,
  IconButton,
  HStack,
  VStack,
} from '@chakra-ui/react';
import flex1 from '../assets/flex1.png';
import flex2 from '../assets/flex2.png';
import flex3 from '../assets/flex3.png';
import flex4 from '../assets/flex4.png';

const images = [
  {
    src: flex1,
    midText: 'Corduroy Totebags',
    baseText:
      'Totebags made with corduroy fabric. This fabric gives a different clothing style.',
  },
  {
    src: flex2,
    midText: 'Leather Totebags',
    baseText:
      'Totebags made with leather fabric. This fabric is usually stronger than the others.',
  },
  {
    src: flex3,
    midText: 'Adire Totebags',
    baseText:
      'Totebags made with Adire fabric, an African traditional fabric style.',
  },
  {
    src: flex4,
    midText: 'Denim Totebags',
    baseText: 'Totebags made with jean fabric to meet your fashion taste.',
  },
];

const ImgCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  let TopColor;
  let MidColor;

  if (activeIndex === 0) {
    TopColor = 'rgba(255, 255, 255, 1)';
  } else if (activeIndex === 1) {
    TopColor = 'rgba(78, 80, 80, 1)';
  } else if (activeIndex === 2) {
    TopColor = 'rgba(255, 255, 255, 1)';
  } else {
    TopColor = 'rgba(255, 255, 255, 1)';
  }

  if (activeIndex === 0) {
    MidColor = 'rgba(255, 255, 255, 1)';
  } else if (activeIndex === 1) {
    MidColor = 'rgba(17, 18, 18, 1)';
  } else if (activeIndex === 2) {
    MidColor = 'rgba(255, 255, 255, 1)';
  } else {
    MidColor = 'rgba(255, 255, 255, 1)';
  }

  return (
    <Box
      position="relative"
      width="full"
      overflow="hidden"
      display={{ xl: 'flex', base: 'none' }}
      mb="1rem"
      borderRadius="37.19px"
    >
      <Flex
        position="absolute"
        top={2}
        left={2}
        zIndex={2}
        flexDirection="row"
        gap="8.26px"
        ml="2rem"
        mt="1rem"
        transition="transform 0.5s ease-in-out"
      >
        {images.map((_, index) => (
          <Box
            key={index}
            width={activeIndex === index ? '61.98px' : '28.93px'}
            height="16.53px"
            borderRadius="51.65px"
            backgroundColor={
              activeIndex === index
                ? 'rgba(217, 217, 217, 1)'
                : 'rgba(46, 48, 48, 1)'
            }
            my={1}
          />
        ))}
      </Flex>
      <Flex
        transition="transform 0.5s ease-in-out"
        transform={`translateX(-${activeIndex * 100}%)`}
        borderRadius="37.19px"
      >
        {images.map((image, index) => (
          <Box
            borderRadius="37.19px"
            key={index}
            flex="none"
            width="full"
            position="relative"
          >
            <Image
              borderRadius="37.19px"
              src={image.src}
              alt={`Slide ${index}`}
            />

            <VStack
              color="white"
              alignItems="flex-start"
              position="absolute"
              bottom="10%"
              left={10}
            >
              <Text
                fontWeight="400"
                fontSize="20.66px"
                lineHeight="24.79px"
                letterSpacing="4%"
                color={TopColor}
              >
                TRENDING TOTEBAGS
              </Text>
              <Text
                fontFamily="Montserrat"
                fontWeight="500"
                fontSize="41.32px"
                lineHeight="50.37px"
                color={TopColor}
              >
                {image.midText}
              </Text>
              <Text
                fontWeight="500"
                fontSize="20px"
                lineHeight="27.2px"
                color={TopColor}
                w="379px"
                noOfLines={3}
              >
                {image.baseText}
              </Text>
            </VStack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ImgCarousel;
