import { Box, Center, Icon, Text, Tooltip, Link } from '@chakra-ui/react';
import { useState, useLayoutEffect } from 'react';

const NavItem = ({id, title, icon, active, setActive}) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isLargerThan992, setIsLargerThan992] = useState(false);

    useLayoutEffect (() => {
        function handleResize() {
          if(window.innerWidth > 992) setIsLargerThan992(true);
          else setIsLargerThan992(false);
        }
    
        window.addEventListener("resize", handleResize);
        
        handleResize();
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    
      }, []);

  return (
      <Box p={{base: "0", lg: "0 12px"}} position="relative">
        <Center as={Link} href={`#${id}`} justifyContent={{base: "flex-start", lg: "center"}} columnGap="12px" onClick={() => setActive(title)}>
            <Tooltip 
            hasArrow 
            label={`${title}`} 
            placement='right' 
            bg="brand.dark.900" 
            color="brand.white"
            m="0 0 0 16px"
            p="4px 12px"
            fontSize="20px"
            borderRadius="6px"
            isDisabled={!isLargerThan992}
            >
                <Center 
                boxSize={{base: "48px", md: "60px", lg: "48px"}}
                bg={(active==title) ? "brand.secondary" : "brand.dark.700"}
                borderRadius={(active==title) ? "16px" : "24px"} 
                color={(active==title) ? "brand.white" : "brand.primary"}
                transition="border-radius 0.15s linear, background 0.2s linear, color 0.2s linear"
                _hover={{ 
                    borderRadius: "16px",
                    bg: "brand.secondary",
                    color: "brand.white",
                    cursor: "pointer",
                }}
                onMouseEnter={()=> setIsHovering(true)} 
                onMouseLeave={() => setIsHovering(false)}
                >
                    <Icon as={icon} boxSize={{base: 8, md: 10, lg: 8}}/>
                </Center>
            </Tooltip>
            <Text 
            display={{base: "block", lg: "none"}} 
            fontSize={{base: "20px", md: "28px"}}
            fontWeight="bold"
            color="brand.primary"
            decoration={(active==title) ? "underline" : "none"}
            >
                {title}
            </Text>
            <Box 
            w="8px" 
            h={(active==title) ? "40px" : isHovering ? "20px" : "8px"} 
            bg="brand.white" 
            borderRadius="full" 
            position="absolute" 
            left="-1" 
            transition="height 0.15s linear"
            display={{base: "none", lg: "block"}}
            />
        </Center>
    </Box>
  )
};

export default NavItem;