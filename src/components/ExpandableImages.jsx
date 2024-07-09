import React, { useEffect, useState } from 'react';
import { Box, HStack, Image, Text } from '@chakra-ui/react';
import flex3 from '../assets/D-001.png';
import flex4 from '../assets/D-002.png';
import flex5 from '../assets/D-003.png';

const images = [flex3, flex4, flex5];

const GameSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  // This effect will run once when the component mounts
  useEffect(() => {
    const savedIndex = localStorage.getItem('hoveredIndex');
    if (savedIndex !== null) {
      setHoveredIndex(parseInt(savedIndex, 10));
    }
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    localStorage.setItem('hoveredIndex', index);
  };

  return (
    <>
      {/* <HStack spacing={4} mb="2rem">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            width={hoveredIndex === index ? '543px' : '281px'}
            h="420px"
            objectFit="cover"
            transition="width 0.3s ease-in-out"
            onMouseEnter={() => handleMouseEnter(index)}
            borderRadius="24px"
            cursor="pointer"
          />
        ))}
      </HStack> */}

      <HStack spacing={4} mb="2rem">
        {images.map((src, index) => (
          <Box
            key={index}
            position="relative"
            onMouseEnter={() => handleMouseEnter(index)}
            width={hoveredIndex === index ? '543px' : '281px'}
            height="420px"
            borderRadius="24px"
            overflow="hidden"
            cursor="pointer"
            transition="width 0.3s ease-in-out"
            _hover={{
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bg: 'rgba(255, 255, 255, 0.2)', // Light overlay color
                borderRadius: '24px',
              },
            }}
          >
            <Image
              src={src}
              width="100%"
              height="100%"
              objectFit="cover"
              borderRadius="24px"
            />
          </Box>
        ))}
      </HStack>
    </>
  );
};

export default GameSection;
