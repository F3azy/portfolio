import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const SectionInfo = ({infos, animate = false}) => {
  return (
    <Box>
      <Heading 
      as={animate && motion.h2} 
      initial={animate && "hidden"}
      whileInView={animate && "visible"}
      variants={animate && fadeIn("up", "", 0.1, 0.75)}
      fontSize={{base: "12px", sm: "14px", md: "16px"}} 
      color="brand.gray"
      letterSpacing="3px"
      >
        {infos.subTitle}
      </Heading>
      <Heading 
      as={animate && motion.h1} 
      initial={animate && "hidden"}
      whileInView={animate && "visible"}
      variants={animate && fadeIn("up", "", 0.5, 0.75)}
      fontSize={{base: "36px",sm: "40px", md: "48px"}}
      >
        {infos.title}
      </Heading>
      <Text 
      as={animate && motion.p}
      initial={animate && "hidden"}
      whileInView={animate && "visible"}
      variants={animate && fadeIn("up", "", 1, 0.75)}
      fontSize={{base: "14px", sm: "16px", md: "18px"}} 
      lineHeight={{base: "20px", sm: "22px", md: "24px"}}
      color="brand.gray"
      letterSpacing="2px"
      fontWeight="bold"
      mt={{base: "8px", md: "16px"}}
      >
        {infos.description}
      </Text>
    </Box>
  )
};

export default SectionInfo;