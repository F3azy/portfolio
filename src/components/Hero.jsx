import { Box, Flex, Text, Heading, useMediaQuery } from '@chakra-ui/react';
import { HeroBG, HeroAnimation } from '../assets';
import Lottie from 'react-lottie-player';
import { motion } from 'framer-motion';
import { slideIn, slideOut, zoomIn } from '../utils/motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)', {ssr: false});
  const [showBox, setShowBox] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBox(false);
    }, 2500);

    return () => {clearTimeout(timer);};
  }, []);

  function getSlideOffset() {
    if(isLargerThan768){
      return 620;
    }
    return 340;
  }


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
    >
      <Flex 
      minH="270px"
      columnGap={{base: "8px", md: "12px"}} 
      position={{base: "static", xl:"absolute"}} 
      top={{lg: "88px"}} 
      left={{xl: "180px" ,'2xl': "320px"}}
      >
        <Flex 
        as={motion.div} 
        initial="hidden" 
        animate="visible"
        variants={slideIn("left", "", 0.5, 2, getSlideOffset())} 
        direction="column" 
        align="center"
        zIndex={9}
        >
          <Box 
          as={motion.div} 
          initial="hidden" 
          animate="visible" 
          variants={slideIn("down", "", 0.5, 1, 150)} 
          boxSize="20px" 
          bg="brand.tertiary" 
          borderRadius="full" 
          />
          <Box 
          as={motion.div} 
          initial="hidden" 
          animate="visible" 
          variants={{
            hidden: {height: 0}, 
            visible: {
              height: "250px", 
              transition: {
                delay: 1.5,
                duration: 0.5,
                ease: "easeOut",
              }
            }
          }}  
          w="2px" 
          // h={{base: "200px", lg: "300px"}} 
          bg="brand.tertiary" 
          />
        </Flex>
        <Box h="min-content" position="relative">
          {showBox && 
          <Box 
          as={motion.div} 
          initial="visible" 
          animate="hidden" 
          variants={slideOut("left", "", 0.5, 2, getSlideOffset())} 
          bg="brand.dark.700" 
          w="full" 
          h="full" 
          position="absolute"
          />}
          <Heading 
          as="h1" 
          fontSize={{base: "32px", md:"48px"}} 
          lineHeight={{base: "36px", md:"48px"}}
          letterSpacing="-0.5px"
          overflow="hidden"
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
      variants={zoomIn(1.5, 1)}
      m={{base: "-100px auto 0", lg: "-150px auto 0"}}
      boxSize={{md:"80vw", lg: "40vw"}}
      position={{base: "static", xl:"absolute"}} 
      bottom={{xl: "-80px", '2xl': "-60px"}} 
      right={{xl: "180px" ,'2xl': "320px"}}
      zIndex={10}
      >
        <Lottie animationData={HeroAnimation} loop play />
      </Box>
    </Flex>
    )
};

export default Hero;