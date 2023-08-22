import { Flex } from '@chakra-ui/react';
import React from 'react';

const SectionWrapper = ({children, id, RowGap = {base: "44px", xl: "88px"}}) => {
  return (
    <Flex 
    id={id}
    direction="column"
    rowGap={RowGap}
    justify="center"
    minH={{lg: "100vh"}} 
    p={{base: "48px 0", md: "60px 0", xl: "88px 0"}} 
    scrollMarginTop={{base: "48px", md: "60px", lg: "0"}}
    >
        {children}
    </Flex>
  )
};

export default SectionWrapper;