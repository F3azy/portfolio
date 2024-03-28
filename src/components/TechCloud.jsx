
import { motion } from "framer-motion";
import { Flex } from "@chakra-ui/react";
import { iconsCloud, cloudOptions } from "../constants";
import { Cloud } from "react-icon-cloud";
import { zoomIn } from "../utils/motion";

const TechCloud = () => {
  return (
    <Flex
      as={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={zoomIn(0.75, 0.4)}
      w={{ base: "300px", sm: "400px", md: "500px", lg: "auto" }}
      mx="auto"
      justify="center"
    >
      <Cloud options={cloudOptions}>{iconsCloud}</Cloud>
    </Flex>
  );
};

export default TechCloud;
