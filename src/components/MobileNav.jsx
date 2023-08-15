import { 
    useDisclosure, 
    Drawer, 
    DrawerOverlay,
    DrawerContent, 
    DrawerHeader,
    DrawerBody, 
    DrawerCloseButton, 
    Flex, 
    IconButton, 
    useMediaQuery
} from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi';
import { navLinks, socialLinks } from '../constants';
import NavItem from './NavItem';
import SocialLink from './SocialLink';
import { useLayoutEffect } from 'react';

const MobileNav = ({active, setActive}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    useLayoutEffect (() => {
      function handleResize() {
        if(window.innerWidth > 992) onClose();
      }
  
      window.addEventListener("resize", handleResize);
      
      handleResize();
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
  
    }, []);

  return (
    <Flex 
    w="full" 
    h={{base: "48px", md: "60px"}} 
    align="center" 
    bg="brand.dark.900" 
    p="0 16px" 
    position="fixed" 
    top="0" 
    zIndex={10}
    display={{base: "flex", lg: "none"}}
    >
      <IconButton 
      minW={{base: "30px", md: "40px"}}
      h={{base: "30px", md: "40px"}}
      aria-label="Menu" 
      icon={<BiMenu />} 
      bg="transparent" 
      fontSize={{base: "24px", md: "28px"}} 
      color="brand.primary"
      border="2px solid"
      borderColor="brand.primary"
      onClick={onOpen}
      _hover={{
        bg: "transparent" ,
      }}
      />
      <Drawer 
      placement="left" 
      onClose={onClose} 
      isOpen={isOpen} 
      returnFocusOnClose={false}
      size={{base: "xs", md: "md"}}
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
                    <Flex as="nav" direction="column" rowGap={{base: "24px", md: "40px"}}>
                    {navLinks.map((navLink) => 
                        <NavItem 
                        key={navLink.id} 
                        id={navLink.id} 
                        title={navLink.title} 
                        icon={navLink.icon} 
                        active={active} 
                        setActive={setActive}
                        />
                        )}
                    </Flex>
                    <Flex mt={{base: "100px", lg: "0"}} justifyContent="center" columnGap={{base: "40px", md: "60px"}}>
                        {socialLinks.map((socialLink) => 
                        <SocialLink 
                        key={socialLink.id} 
                        icon={socialLink.icon} 
                        url={socialLink.url} 
                        />
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