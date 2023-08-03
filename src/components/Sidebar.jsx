import React from 'react';
import { Box, Flex } from '@chakra-ui/react';


const Sidebar = () => {
  return (
    <Box w={"72px"} h="100vh" bg={"brand.dark.900"} p="12px 0" position="fixed" display={{base: "none", lg: "block"}} border={"1px solid green"}>
      <Flex direction="column" align="center">
        Sidebar
      </Flex>
    </Box>
  )
};

export default Sidebar;