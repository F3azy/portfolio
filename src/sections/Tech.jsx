import { sections } from "../constants";
import { SectionInfo, SectionWrapper } from "../components";
import TechCloud from "../components/TechCloud";
import useSetActiveSection from "../hooks/useSetActiveSection";

const Tech = () => {
  const ref = useSetActiveSection("Technologies");

  return (
    <SectionWrapper id="tech" Ref={ref} RowGap={{ base: "28px", xl: "8px" }}>
      <SectionInfo infos={sections.get("tech")} animate={true} />
      <TechCloud />
    </SectionWrapper>
  );
};

export default Tech;
