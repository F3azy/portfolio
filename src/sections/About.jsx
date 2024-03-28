import useSetActiveSection from "../hooks/useSetActiveSection";
import { SectionInfo, SectionWrapper } from "../components";
import { ProfessionList } from "../components";
import { sections } from "../constants";

const About = () => {
  const ref = useSetActiveSection("About");

  return (
    <SectionWrapper id="about" ref={ref}>
      <SectionInfo infos={sections.get("about")} animate={true} />
      <ProfessionList />
    </SectionWrapper>
  );
};

export default About;
