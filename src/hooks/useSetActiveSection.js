import { useEffect, useRef } from "react";
import useIsInViewport from "./useIsInView";
import { useActiveSection } from "../context/ActiveSectionContext";

export default function useSetActiveSection(section) {
  const ref = useRef(null);
  const isInViewPort = useIsInViewport(ref);

  const { clicked, setActive } = useActiveSection();

  useEffect(() => {
    if (isInViewPort) if (!clicked && setActive) setActive(section);
  }, [isInViewPort]);

  return ref;
}
