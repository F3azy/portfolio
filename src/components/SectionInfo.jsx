import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { textFadeIn } from "../utils/motion";

const SectionInfo = ({infos, animate = false}) => {
  return (
    <Box>
      <Heading 
      as={motion.h2} 
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      variants={animate ? textFadeIn("up", "tween", 0.75, 0.1) : {}}
      fontSize={{base: "12px", sm: "14px", md: "16px"}} 
      color="brand.gray"
      letterSpacing="3px"
      >
        {infos.subTitle}
      </Heading>
      <Heading 
      as={motion.h1} 
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      variants={animate ? textFadeIn("up", "tween", 0.75,  0.3) : {}}
      fontSize={{base: "36px",sm: "40px", md: "48px"}}
      >
        {infos.title}
      </Heading>
      <Text 
      as={motion.p}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      variants={animate ? textFadeIn("up", "tween", 0.75, 0.5) : {}}
      fontSize={{base: "14px", sm: "16px", md: "18px"}} 
      lineHeight={{base: "20px", sm: "22px", md: "24px"}}
      color="brand.gray"
      letterSpacing="2px"
      fontWeight="bold"
      mt={{base: "8px", md: "16px"}}
      textAlign="justify"
      >
        {infos.description}
      </Text>
    </Box>
  )
};

export default SectionInfo;