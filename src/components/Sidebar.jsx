import React from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { navLinks, socialLinks } from '../constants';
import NavItem from './NavItem';
import SocialLink from './SocialLink';


const Sidebar = () => {
  return (
    <Flex h="full" direction="column" justify="space-between" bg="brand.dark.900" p="12px 0" position="fixed" display={{base: "none", lg: "flex"}}>
      <Flex as="nav" direction="column" rowGap="12px">
        {navLinks.map((navLink) => 
          <NavItem 
          key={navLink.id} 
          id={navLink.id} 
          title={navLink.title} 
          icon={navLink.icon} 
          />
        )}
      </Flex>
      <Flex direction="column" rowGap="12px">
        {socialLinks.map((socialLink) => 
          <SocialLink key={socialLink.id} icon={socialLink.icon} url={socialLink.url} />
        )}
      </Flex>
    </Flex>
  )
};

export default Sidebar;