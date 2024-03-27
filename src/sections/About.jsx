import useSetActiveSection from "../hooks/useSetActiveSection";
import { SectionInfo, SectionWrapper } from "../components";
import ProfessionList from "../components/ProfessionList";
import { sections } from "../constants";

const About = () => {
  const ref = useSetActiveSection("About");

  return (
    <SectionWrapper id="about" Ref={ref}>
      <SectionInfo infos={sections.get("about")} animate={true} />
      <ProfessionList />
    </SectionWrapper>
  );
};

export default About;
