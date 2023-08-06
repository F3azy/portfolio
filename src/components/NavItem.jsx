import { Box, Center, Icon, Text, Tooltip } from '@chakra-ui/react';
import { useState } from 'react';

const NavItem = ({id, title, icon}) => {
    const [isHovering, setIsHovering] = useState(false);


  return (
      <Box p={{base: "0", lg: "0 12px"}} position="relative">
        <Center justifyContent={{base: "flex-start", lg: "center"}} columnGap="12px">
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
            >
                <Center 
                w="48px" 
                h="48px" 
                bg="brand.dark.700" 
                borderRadius="24px" 
                color="brand.primary"
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
                    <Icon as={icon} boxSize={8}/>
                </Center>
            </Tooltip>
            <Text 
            display={{base: "block", lg: "none"}} 
            fontSize="20px"
            fontWeight="bold"
            color="brand.primary"
            >
                {title}
            </Text>
            <Box 
            w="8px" 
            h={isHovering ? "20px" : "8px"} 
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