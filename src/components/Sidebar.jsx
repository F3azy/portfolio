import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import NavItemList from "./NavItemList";
import SocialLinkList from "./SocialLinkList";

const Sidebar = () => {
  return (
    <Flex
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={fadeIn("right", "tween", 0.75, 0.5)}
      h="full"
      direction="column"
      justify="space-between"
      bg="brand.dark.900"
      p="12px 0"
      position="fixed"
      left="0"
      zIndex={10}
      display={{ base: "none", lg: "flex" }}
    >
      <NavItemList
        as={motion.nav}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer(0.4, 0.75)}
        direction="column"
        rowGap="12px"
      />

      <SocialLinkList
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer(0.4, 0.75, -1)}
        direction="column"
        rowGap="12px"
      />
    </Flex>
  );
};

export default Sidebar;
