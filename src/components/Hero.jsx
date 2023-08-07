import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import { HeroBG, HeroAnimation } from '../assets';
import Lottie from 'react-lottie-player';

const Hero = () => {

  return (
    <Flex 
    direction="column"
    h={{lg: "100vh"}} 
    p={"44px 16px"} 
    position={{base: "static", lg:"relative"}}
    bgImage={HeroBG} 
    bgRepeat="no-repeat" 
    bgPosition="bottom" 
    bgSize={{lg: "contain"}}
    >
      <Flex 
      columnGap={{base: "8px", md: "12px"}} 
      position={{base: "static", lg:"absolute"}} 
      top={{base: "44px", lg: "88px"}} 
      left={{lg: "188px"}}
      >
        <Flex direction="column" align="center">
          <Box boxSize="20px" bg="brand.tertiary" borderRadius="full" />
          <Box w="2px" h={{base: "200px", lg: "300px"}} bg="brand.tertiary" />
        </Flex>
        <Box>
        <Heading 
        as="h1" 
        fontSize={{base: "32px", md:"48px"}} 
        lineHeight={{base: "36px", md:"40px"}}
        letterSpacing="-0.5px"
        >
          Hello World, I'm <Text as="span" color="brand.tertiary">Francesco</Text>
        </Heading>
        <Text 
        m={{base: "8px 0 0",md: "16px 0 0"}}
        fontWeight="bold" 
        fontSize={{base: "14px", md: "24px"}} 
        lineHeight={{base: "20px", md:"32px"}} 
        letterSpacing={{base: "1.5px", md: "1px"}}
        >
          I am a <Text as="span" color="brand.tertiary">Front-end</Text> developer, <br/>
          aspiring to become a FullStack developer 
        </Text>
        </Box>
      </Flex>
      <Box 
      m={{base: "-100px auto 0", md: "-120px auto 0"}}
      boxSize={{md:"500px", lg:"800px"}}
      position={{base: "static", lg:"absolute"}} 
      bottom="0" 
      right={{base: "0",lg: "188px"}}
      >
        <Lottie animationData={HeroAnimation} loop play />
      </Box>
    </Flex>
  )
};

export default Hero;