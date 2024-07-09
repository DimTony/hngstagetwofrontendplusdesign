import React, { useEffect, useState } from 'react';
import { Box, Button, HStack, Image, Stack, Text } from '@chakra-ui/react';
import flex3 from '../assets/D-001.png';
import flex4 from '../assets/D-002.png';
import flex5 from '../assets/D-003.png';

const images = [flex3, flex4, flex5];
const imageHeading = [
  'Explore the totebag fashion',
  'Branded Collections',
  'Totes as Office wears',
];
const imageSubHeading = [
  'Totes are reliable carriage that adds to the details of your dress fashion with contradicting your fashion sense.',
  'Customize your style and brands here on thetotebagshop.',
  'Totes can be worn to workspaces and to the office likewise.',
];

const GameSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

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
      <HStack spacing={4} mb="2rem">
        {images.map((src, index) => (
          <Box
            key={index}
            position="relative"
            onMouseEnter={() => handleMouseEnter(index)}
            // width={hoveredIndex === index ? '543px' : '281px'}
            width={hoveredIndex === index ? '60%' : '20%'}
            height="420px"
            borderRadius="24px"
            overflow="hidden"
            cursor="pointer"
            transition="width 0.3s ease-in-out"
          >
            <Image
              src={src}
              width="100%"
              height="100%"
              objectFit="cover"
              borderRadius="24px"
            />
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              bg="rgba(0, 0, 0, 0.5)"
              borderRadius="24px"
            />
            <Stack
              position="absolute"
              bottom="20px"
              left="20px"
              right="20px"
              textAlign="center"
              color="white"
              alignItems="flex-start"
              h="92%"
              transform={
                hoveredIndex === index ? 'translateY(0)' : 'translateY(0)'
              }
              transition="transform 0.3s ease-in-out"
              justifyContent={hoveredIndex === index ? 'flex-end' : 'center'}
            >
              <Text fontSize="xl" mb="2" textAlign="left">
                {imageHeading[index]}
              </Text>

              <Text fontSize="md" textAlign="left">
                {imageSubHeading[index]}
              </Text>

              {hoveredIndex === index && (
                <Button
                  variant="solid"
                  p="27.79px 41.69px 27.79px 41.69px"
                  mr="2"
                  borderRadius="50px"
                  bg="rgba(247, 254, 254, 1)"
                >
                  <Text
                    fontWeight="600"
                    fontSize="20.84px"
                    lineHeight="24.47px"
                    color="rgba(0, 22, 22, 1)"
                  >
                    Shop now
                  </Text>
                </Button>
              )}
            </Stack>
          </Box>
        ))}
      </HStack>
    </>
  );
};

export default GameSection;
