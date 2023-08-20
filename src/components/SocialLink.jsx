import { Box, Center, Icon, Link } from '@chakra-ui/react';

const SocialLink = ({icon, url, onClose}) => {
  return (
    <Box p={{base: "0", lg: "0 12px"}} position="relative">
        <Link href={url} isExternal onClick={onClose}>
            <Center 
            color="brand.primary" 
            transition="color 0.5s ease, transform 0.5s ease"
            _hover={{
                color: "brand.secondary",
                cursor: "pointer",
                transform: "scale(1.2)",
            }}
            >
                <Icon as={icon} boxSize={{base: "48px", md: "60px", lg: "48px"}}/>
            </Center>
        </Link>
    </Box>
  )
};

export default SocialLink;