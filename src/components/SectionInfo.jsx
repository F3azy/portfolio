import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const SectionInfo = ({infos}) => {
  return (
    <Box>
      <Heading 
      as={motion.h2} 
      initial="hidden"
      whileInView="visible"
      variants={fadeIn("up", "", 0.1, 1)}
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
      variants={fadeIn("up", "", 0.5, 1)}
      fontSize={{base: "36px",sm: "40px", md: "48px"}}
      >
        {infos.title}
      </Heading>
      <Text 
      as={motion.p}
      initial="hidden"
      whileInView="visible"
      variants={fadeIn("up", "", 1, 1)}
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