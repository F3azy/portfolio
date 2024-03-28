import { Flex } from "@chakra-ui/react";
import React from "react";

const SectionWrapper = (props) => {
  const { children, innerRef } = props;

  return (
    <Flex
      {...props}
      ref={innerRef}
      direction="column"
      rowGap={{base: "44px", xl: "88px"}}
      justify="center"
      minH={{ lg: "100vh" }}
      p={{ base: "48px 0", md: "60px 0", xl: "40px 0" }}
      scrollMarginTop={{ base: "48px", md: "60px", lg: "0" }}
    >
      {children}
    </Flex>
  );
};

export default SectionWrapper;
