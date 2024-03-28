import { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";

const HeroHideTextBox = () => {
  const [isLargerThan768, isLargerThan412] = useMediaQuery(
    ["(min-width: 768px)", "(min-width: 412px)"],
    { ssr: false }
  );
  const [showBox, setShowBox] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBox(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  function getSlideOffset() {
    if (isLargerThan768) {
      return 600;
    }

    if (isLargerThan412) {
      return 360;
    }

    return 315;
  }

  if (showBox)
    return (
      <Box
        bg="brand.dark.700"
        w={`${getSlideOffset()}px`}
        h="full"
        position="absolute"
        left={-(getSlideOffset() + 20)}
        zIndex={1}
      />
    );

  return null;
};

export default HeroHideTextBox;
