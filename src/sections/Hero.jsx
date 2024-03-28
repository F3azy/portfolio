import { HeroBG } from "../assets";
import { Flex } from "@chakra-ui/react";
import useSetActiveSection from "../hooks/useSetActiveSection";
import { HeroGif, HeroTitle } from "../components";

const Hero = () => {
  const ref = useSetActiveSection("hero");

  return (
    <Flex
      id="hero"
      ref={ref}
      direction="column"
      minH={{ lg: "100vh" }}
      p={{ base: "48px 16px", md: "60px 16px", lg: "48px 94px" }}
      position={{ base: "static", xl: "relative" }}
      scrollMarginTop={{ base: "48px", md: "60px", lg: "0" }}
      bgImage={HeroBG}
      bgRepeat="no-repeat"
      bgPosition="bottom"
      bgSize={{ lg: "100%" }}
      overflow="hidden"
    >
      <HeroTitle />
      <HeroGif />
    </Flex>
  );
};

export default Hero;
