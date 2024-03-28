import { Flex } from "@chakra-ui/react";
import { forwardRef } from "react";

const SectionWrapper = forwardRef(function SectionWrapper(props, ref) {
  const { children } = props;

  return (
    <Flex
      {...props}
      ref={ref}
      direction="column"
      rowGap={{ base: "44px", xl: "88px" }}
      justify="center"
      minH={{ lg: "100vh" }}
      p={{ base: "48px 0", md: "60px 0", xl: "40px 0" }}
      scrollMarginTop={{ base: "48px", md: "60px", lg: "0" }}
    >
      {children}
    </Flex>
  );
});

export default SectionWrapper;
