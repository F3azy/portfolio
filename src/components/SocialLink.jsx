import { Box, Center, Icon, Link } from '@chakra-ui/react';
import React from 'react';

const SocialLink = ({icon, url}) => {
  return (
    <Box p="0 12px" position="relative">
        <Link href={url} isExternal>
            <Center 
            color="brand.primary" 
            transition="color 0.5s ease, transform 0.5s ease"
            _hover={{
                color: "brand.secondary",
                cursor: "pointer",
                transform: "scale(1.2)",
            }}
            >
                <Icon as={icon} boxSize="48px"/>
            </Center>
        </Link>
    </Box>
  )
};

export default SocialLink;