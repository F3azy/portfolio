import { Box } from "@chakra-ui/react";
import useHideAfterTime from "../hooks/useHideAfterTime";

const HeroHideTextBox = ({ offset }) => {
  const show = useHideAfterTime(2500);

  if (show)
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
