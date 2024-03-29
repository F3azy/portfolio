import { useEffect, useState } from 'react';
import { HeroBG, HeroAnimation } from '../assets';
import Lottie from 'react-lottie-player';
import { motion } from 'framer-motion';
import { slideIn, zoomIn } from '../utils/motion';
import { Box, Flex, Text, Heading, useMediaQuery } from '@chakra-ui/react';
import useSetActiveSection from '../hooks/useSetActiveSection';

const Hero = () => {
  const [isLargerThan768, isLargerThan412] = useMediaQuery(['(min-width: 768px)', '(min-width: 412px)'], {ssr: false});
  const [showBox, setShowBox] = useState(true);

  const ref = useSetActiveSection("Hero");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBox(false);
    }, 2500);

    return () => {clearTimeout(timer);};
  }, []);

  function getSlideOffset() {
    
    if(isLargerThan768){
      return 600;
    }

    if(isLargerThan412){
      return 360;
    }

    return 315;
  }


  return (
    <Flex 
    id="hero"
    ref={ref}
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
      minH="270px"
      columnGap={{base: "8px", md: "12px"}} 
      position={{base: "static", xl:"absolute"}} 
      top={{lg: "88px"}} 
      left={{xl: "180px" ,'2xl': "320px"}}
      >
        <Flex 
        direction="column" 
        align="center"
        zIndex={2}
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
          bg="brand.tertiary" 
          />
        </Flex>
        <Box h="min-content" position="relative">
          {showBox && 
          <Box 
          bg="brand.dark.700" 
          w={`${getSlideOffset()}px` }
          h="full" 
          position="absolute"
          left={-(getSlideOffset()+20)}
          zIndex={1}
          />
          }
          <Box
          as={motion.div} 
          initial="hidden" 
          animate="visible" 
          variants={slideIn("right", "", 0.5, 2, getSlideOffset()+20)} 
          >
            <Heading 
            as="h1" 
            fontSize={{base: "32px", md:"48px"}} 
            lineHeight={{base: "36px", md:"48px"}}
            letterSpacing="-0.5px"
            overflow="hidden"
            ml="4px"
            >
              Hello World, I'm <Text as="span" color="brand.tertiary">Francesco</Text>
            </Heading>
            <Text 
            m={{base: "8px 0 0",md: "16px 0 0"}}
            fontWeight="bold" 
            fontSize={{base: "14px",sm: "20px", md: "24px"}} 
            lineHeight={{base: "20px", sm: "26px", md:"32px"}} 
            letterSpacing={{base: "1.5px", md: "1px"}}
            ml="4px"
            >
              I am a <Text as="span" color="brand.tertiary">Front-end</Text> developer, <br/>
              aspiring to become a FullStack developer 
            </Text>
          </Box>
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
      zIndex={9}
      >
        <Lottie animationData={HeroAnimation} loop play />
      </Box>
    </Flex>
    )
};

export default Hero;