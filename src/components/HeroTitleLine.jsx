import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { Box, Flex } from "@chakra-ui/react";

const HeroTitleLine = () => {
  return (
    <Flex direction="column" align="center" zIndex={2}>
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
          hidden: { height: 0 },
          visible: {
            height: "250px",
            transition: {
              delay: 1.5,
              duration: 0.5,
              ease: "easeOut",
            },
          },
        }}
        w="2px"
        bg="brand.tertiary"
      />
    </Flex>
  );
};

export default HeroTitleLine;
