import { useEffect, useRef } from "react";
import { useIsInViewport } from "../hooks/useIsInView";
import { SectionInfo, SectionWrapper } from "../components";
import { useActiveSection } from "../context/ActiveSectionContext";
import ProfessionList from "../components/ProfessionList";
import { sections } from "../constants";

const About = () => {
  const AboutRef = useRef(null);
  const isInViewPort = useIsInViewport(AboutRef);

  const { clicked, setActive } = useActiveSection();

  useEffect(() => {
    if (isInViewPort) if (!clicked && setActive) setActive("About");
  }, [isInViewPort]);

  return (
    <SectionWrapper id="about" Ref={AboutRef}>
      <SectionInfo infos={sections.get("about")} animate={true} />
      <ProfessionList />
    </SectionWrapper>
  );
};

export default About;
