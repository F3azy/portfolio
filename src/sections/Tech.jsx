import { useEffect, useRef } from "react";
import { useIsInViewport } from "../hooks/useIsInView";
import { sections } from "../constants";
import { SectionInfo, SectionWrapper } from "../components";
import { useActiveSection } from "../context/ActiveSectionContext";
import TechCloud from "../components/TechCloud";

const Tech = () => {
  const TechRef = useRef(null);
  const isInViewPort = useIsInViewport(TechRef);

  const { clicked, setActive } = useActiveSection();

  useEffect(() => {
    if (isInViewPort) if (!clicked && setActive) setActive("Technologies");
  }, [isInViewPort]);

  return (
    <SectionWrapper
      id="tech"
      Ref={TechRef}
      RowGap={{ base: "28px", xl: "8px" }}
    >
      <SectionInfo infos={sections.get("tech")} animate={true} />
      <TechCloud />
    </SectionWrapper>
  );
};

export default Tech;
