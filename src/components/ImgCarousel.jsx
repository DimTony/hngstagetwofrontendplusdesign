import React, { useEffect, useState } from 'react';
import { Box, Image, Text, Flex, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import flex1 from '../assets/flex1.png';
import flex2 from '../assets/flex2.png';
import flex3 from '../assets/flex3.png';
import flex4 from '../assets/flex4.png';

const images = [
  { src: flex1, text: 'Text for Image 1' },
  { src: flex2, text: 'Text for Image 2' },
  { src: flex3, text: 'Text for Image 3' },
  { src: flex4, text: 'Text for Image 4' },
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

  return (
    <Box
      position="relative"
      width="full"
      overflow="hidden"
      display={{ xl: 'flex', base: 'none' }}
    >
      <Flex
        position="absolute"
        top={2}
        left={2}
        zIndex={2}
        flexDirection="column"
      >
        {images.map((_, index) => (
          <Box
            key={index}
            width="10px"
            height="10px"
            borderRadius="50%"
            backgroundColor={activeIndex === index ? 'black' : 'gray'}
            my={1}
          />
        ))}
      </Flex>
      <Flex
        transition="transform 0.5s ease-in-out"
        transform={`translateX(-${activeIndex * 100}%)`}
      >
        {images.map((image, index) => (
          <Box key={index} flex="none" width="full" position="relative">
            <Image src={image.src} alt={`Slide ${index}`} />
            <Text
              position="absolute"
              bottom={4}
              left={4}
              color="white"
              fontSize="xl"
            >
              {image.text}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ImgCarousel;
