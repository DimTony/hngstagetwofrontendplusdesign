import React, { useState } from 'react';
import { Box, HStack, Image, Text } from '@chakra-ui/react';
import flex3 from '../assets/D-001.png';
import flex4 from '../assets/D-002.png';
import flex5 from '../assets/D-003.png';

const images = [
  { id: 1, src: flex3 },
  { id: 2, src: flex4 },
  { id: 3, src: flex5 },
];
const SecondAccordion = () => {
  const [focusedImage, setFocusedImage] = useState(images[0].id);
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <>
      <HStack w="100%" spacing={4}>
        {images.map((image) => (
          <Box
            key={image.id}
            className={
              focusedImage === image.id
                ? hoveredImage
                  ? 'compressed'
                  : 'full-width'
                : hoveredImage === image.id
                ? 'full-width'
                : 'compressed'
            }
            onMouseEnter={() => setHoveredImage(image.id)}
            onMouseLeave={() => setHoveredImage(images[0].id)}
            onClick={() => setFocusedImage(image.id)}
            transition="width 0.3s ease"
            w="100%"
          >
            <Image
              src={image.src}
              alt={`image-${image.id}`}
              w="100%"
              h="100%"
            />
          </Box>
        ))}
      </HStack>
    </>
  );
};

export default SecondAccordion;
