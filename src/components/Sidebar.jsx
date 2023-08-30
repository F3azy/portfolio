import { Flex } from '@chakra-ui/react';
import { navLinks, socialLinks } from '../constants';
import NavItem from './NavItem';
import SocialLink from './SocialLink';
import { motion } from 'framer-motion';
import { fadeIn } from "../utils/motion";

const Sidebar = ({active, setActive}) => {
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
    display={{base: "none", lg: "flex"}}
    >
      <Flex as="nav" direction="column" rowGap="12px">
        {navLinks.map((navLink, index) => 
          <NavItem 
          key={navLink.id} 
          id={navLink.id} 
          title={navLink.title} 
          icon={navLink.icon} 
          active={active} 
          setActive={setActive}
          index={index}
          />
        )}
      </Flex>
      <Flex direction="column-reverse" rowGap="12px">
        {socialLinks.toReversed().map((socialLink, index) => 
          <SocialLink 
          key={socialLink.id} 
          icon={socialLink.icon} 
          url={socialLink.url} 
          index={index}
          />
        )}
      </Flex>
    </Flex>
  )
};

export default Sidebar;