import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import { HeroBG, HeroAnimation } from '../assets';
import Lottie from 'react-lottie-player';
import { motion } from 'framer-motion';
import { zoomIn } from '../utils/motion';

const Hero = () => {

  return (
    <Flex 
    id="hero"
    direction="column"
    minH={{lg: "100vh"}} 
    p={{base: "48px 16px", md: "60px 16px", lg: "48px 94px"}} 
    position={{base: "static", xl:"relative"}}
    scrollMarginTop={{base: "48px", md: "60px", lg: "0"}}
    bgImage={HeroBG} 
    bgRepeat="no-repeat" 
    bgPosition="bottom" 
    bgSize={{lg: "100%"}}
    overflow="hidden"
    >
      <Flex 
      columnGap={{base: "8px", md: "12px"}} 
      position={{base: "static", xl:"absolute"}} 
      top={{lg: "88px"}} 
      left={{xl: "180px" ,'2xl': "320px"}}
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
        fontSize={{base: "14px",sm: "20px", md: "24px"}} 
        lineHeight={{base: "20px", sm: "26px", md:"32px"}} 
        letterSpacing={{base: "1.5px", md: "1px"}}
        >
          I am a <Text as="span" color="brand.tertiary">Front-end</Text> developer, <br/>
          aspiring to become a FullStack developer 
        </Text>
        </Box>
      </Flex>
      <Box 
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={zoomIn(1, 1.5)}
      m={{base: "-100px auto 0", lg: "-240px auto 0"}}
      boxSize={{md:"600px", lg: "700px"}}
      position={{base: "static", xl:"absolute"}} 
      bottom={{xl: "-50px", '2xl': "-80px"}} 
      right={{xl: "180px" ,'2xl': "320px"}}
      >
        <Lottie animationData={HeroAnimation} loop play />
      </Box>
    </Flex>
  )
};

export default Hero;