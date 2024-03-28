import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import HeroTitleLine from "./HeroTitleLine";
import HeroHideTextBox from "./HeroHideTextBox";

const HeroTitle = () => {
  return (
    <Flex
      minH="270px"
      columnGap={{ base: "8px", md: "12px" }}
      position={{ base: "static", xl: "absolute" }}
      top={{ lg: "88px" }}
      left={{ xl: "180px", "2xl": "320px" }}
    >
      <HeroTitleLine />
      <Box h="min-content" position="relative">
        <HeroHideTextBox />
        <Box
          as={motion.div}
          initial="hidden"
          animate="visible"
          variants={slideIn("right", "", 0.5, 2, getSlideOffset() + 20)}
        >
          <Heading
            as="h1"
            fontSize={{ base: "32px", md: "48px" }}
            lineHeight={{ base: "36px", md: "48px" }}
            letterSpacing="-0.5px"
            overflow="hidden"
            ml="4px"
          >
            Hello World, I'm{" "}
            <Text as="span" color="brand.tertiary">
              Francesco
            </Text>
          </Heading>
          <Text
            m={{ base: "8px 0 0", md: "16px 0 0" }}
            fontWeight="bold"
            fontSize={{ base: "14px", sm: "20px", md: "24px" }}
            lineHeight={{ base: "20px", sm: "26px", md: "32px" }}
            letterSpacing={{ base: "1.5px", md: "1px" }}
            ml="4px"
          >
            I am a{" "}
            <Text as="span" color="brand.tertiary">
              Front-end
            </Text>{" "}
            developer, <br />
            aspiring to become a FullStack developer
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default HeroTitle;
