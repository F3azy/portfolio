import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

const HeroHideTextBox = ({ offset }) => {
  const [showBox, setShowBox] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBox(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (showBox)
    return (
      <Box
        bg="brand.dark.700"
        w={`${offset}px`}
        h="full"
        position="absolute"
        left={-(offset + 20)}
        zIndex={1}
      />
    );

  return null;
};

export default HeroHideTextBox;
