import { Box } from "@chakra-ui/react";
import Lottie from "react-lottie-player";
import { HeroAnimation } from "../assets";
import { motion } from "framer-motion";
import { zoomIn } from "../utils/motion";

const HeroGif = () => {
  return (
    <Box
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={zoomIn(1.5, 1)}
      m={{ base: "-100px auto 0", lg: "-150px auto 0" }}
      boxSize={{ md: "80vw", lg: "40vw" }}
      position={{ base: "static", xl: "absolute" }}
      bottom={{ xl: "-80px", "2xl": "-60px" }}
      right={{ xl: "180px", "2xl": "320px" }}
      zIndex={9}
    >
      <Lottie animationData={HeroAnimation} loop play />
    </Box>
  );
};

export default HeroGif;
