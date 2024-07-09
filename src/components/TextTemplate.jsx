import { Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import React from 'react';

export const TextTemplate = ({
  show,
  xlTop,
  xlBottom,
  baseTop,
  baseBottom,
}) => {
  const topTextContent = useBreakpointValue({
    xl: xlTop,
    lg: xlTop,
    md: xlTop,
    base: baseTop,
  });
  const bottomTextContent = useBreakpointValue({
    xl: xlBottom,
    lg: xlBottom,
    md: xlBottom,
    base: baseBottom,
  });

  let dis;

  if (show === 'no_base') {
    dis = useBreakpointValue({
      xl: 'flex',
      lg: 'flex',
      md: 'flex',
      base: 'none',
    });
  }

  return (
    <>
      <VStack
        display={dis}
        alignItems="flex-start"
        w={{ xl: '100%', lg: '100%', md: '100%', base: '100%' }}
        mb={{ xl: '1rem', base: '0' }}
      >
        <Text
          color="rgba(0, 22, 22, 1)"
          fontWeight="600"
          fontSize={{ xl: '32px', lg: '24px', md: '18px', base: '14px' }}
          lineHeight={{ xl: '38.4px', lg: '28px', md: '18px', base: '14.4px' }}
          mb="0.7rem"
        >
          {topTextContent}
        </Text>
        <Text
          fontFamily="Montserrat"
          fontWeight={{ xl: '300', lg: '300', md: '400', base: '400' }}
          fontSize={{ xl: '18px', lg: '16px', md: '14px', base: '12px' }}
          lineHeight={{ xl: '21.6px', lg: '18px', md: '16px', base: '14.4px' }}
          color="rgba(17, 18, 18, 1)"
        >
          {bottomTextContent}
        </Text>
      </VStack>
    </>
  );
};

export const BaseTextTemplate = ({
  show,
  xlTop,
  xlBottom,
  baseTop,
  baseBottom,
}) => {
  const topTextContent = useBreakpointValue({
    xl: xlTop,
    lg: xlTop,
    md: xlTop,
    base: baseTop,
  });
  const bottomTextContent = useBreakpointValue({
    xl: xlBottom,
    lg: xlBottom,
    md: xlBottom,
    base: baseBottom,
  });

  let dis;

  if (show === 'no_base') {
    dis = useBreakpointValue({
      xl: 'flex',
      lg: 'flex',
      md: 'flex',
      base: 'none',
    });
  }

  return (
    <>
      <VStack
        display={dis}
        alignItems="flex-start"
        w={{ xl: '100%', lg: '100%', md: '100%', base: '328px' }}
        mb="1rem"
      >
        <Text
          color="rgba(0, 0, 0, 1)"
          fontWeight="500"
          fontSize={{ xl: '32px', lg: '24px', md: '18px', base: '24px' }}
          lineHeight={{ xl: '38.4px', lg: '28px', md: '18px', base: '28.8px' }}
        >
          {topTextContent}
        </Text>
        <Text
          fontFamily="Montserrat"
          fontWeight={{ xl: '300', lg: '300', md: '400', base: '400' }}
          fontSize={{ xl: '18px', lg: '16px', md: '14px', base: '14px' }}
          lineHeight={{ xl: '21.6px', lg: '18px', md: '16px', base: '19.04px' }}
          color="rgba(70, 80, 80, 1)"
        >
          {bottomTextContent}
        </Text>
      </VStack>
    </>
  );
};
