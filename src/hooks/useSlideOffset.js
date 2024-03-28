import { useMediaQuery } from "@chakra-ui/react";

export default function useSlideOffset() {
  const [isLargerThan768, isLargerThan412] = useMediaQuery(
    ["(min-width: 768px)", "(min-width: 412px)"],
    { ssr: false }
  );

  function getSlideOffset() {
    if (isLargerThan768) {
      return 600;
    }

    if (isLargerThan412) {
      return 360;
    }

    return 315;
  }

  return getSlideOffset();
}
