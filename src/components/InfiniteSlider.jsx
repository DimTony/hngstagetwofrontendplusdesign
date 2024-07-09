import React, { useState, useEffect } from 'react';
// import Slider from 'infinite-react-carousel';
import flex1 from '../assets/flex1.png';
import flex2 from '../assets/flex2.png';
import flex3 from '../assets/flex3.png';
import flex4 from '../assets/flex4.png';
import { Box, HStack, Image } from '@chakra-ui/react';
import './ImgCarousel.css';

const images = [
  { src: flex1, text: 'Text for Image 1' },
  { src: flex2, text: 'Text for Image 2' },
  { src: flex3, text: 'Text for Image 3' },
  { src: flex4, text: 'Text for Image 4' },
];

const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <>
      <Box w="100%" h="394.58px" overflow="hidden">
        {images.map((image, index) => (
          <Box key={index}>
            <Image
              src={image.src}
              alt="img"
              className="img_slider_img"
              transform={`translateX(-${index * 100}%)`}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Slider;
