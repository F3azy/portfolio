import { sections } from "../constants";
import { SectionInfo, SectionWrapper } from "../components";
import TechCloud from "../components/TechCloud";
import useSetActiveSection from "../hooks/useSetActiveSection";

const Tech = () => {
  const ref = useSetActiveSection("tech");

  return (
    <SectionWrapper id="tech" ref={ref}>
      <SectionInfo infos={sections.get("tech")} animate={true} />
      <TechCloud />
    </SectionWrapper>
  );
};

export default Tech;
