import React from 'react';
import { 
    useDisclosure, 
    Drawer, 
    DrawerOverlay,
    DrawerContent, 
    DrawerHeader,
    DrawerBody, 
    DrawerCloseButton, 
    Flex, 
    IconButton 
} from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi';
import { navLinks, socialLinks } from '../constants';
import NavItem from './NavItem';
import SocialLink from './SocialLink';

const MobileNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex 
    w="full" 
    h="48px" 
    alignItems="center" 
    bg="brand.dark.900" 
    p="0 16px" 
    position="fixed" 
    top="0" 
    display={{base: "flex", lg: "none"}}
    >
      <IconButton 
      minW="30px"
      h="30px"
      aria-label="Menu" 
      icon={<BiMenu />} 
      bg="transparent" 
      fontSize="24px" 
      color="brand.primary"
      border="2px solid"
      borderColor="brand.primary"
      onClick={onOpen}
      />
      <Drawer 
      placement="left" 
      onClose={onClose} 
      isOpen={isOpen} 
      returnFocusOnClose={false}
      >
        <DrawerOverlay />
        <DrawerContent bg="brand.dark.900">
            <DrawerCloseButton fontSize="16px" color="brand.primary" />
            <DrawerHeader></DrawerHeader>
            <DrawerBody>
                <Flex 
                h="full" 
                direction="column" 
                justify="space-between" 
                p="16px 0" 
                display={{base: "flex", lg: "none"}}
                >
                    <Flex as="nav" direction="column" rowGap="24px">
                    {navLinks.map((navLink) => 
                        <NavItem 
                        key={navLink.id} 
                        id={navLink.id} 
                        title={navLink.title} 
                        icon={navLink.icon} 
                        />
                        )}
                    </Flex>
                    <Flex justifyContent="center" columnGap="40px">
                        {socialLinks.map((socialLink) => 
                        <SocialLink key={socialLink.id} icon={socialLink.icon} url={socialLink.url} />
                        )}
                    </Flex>
                </Flex>
            </DrawerBody>
        </DrawerContent>
      </Drawer>
  </Flex>
  )
};

export default MobileNav;