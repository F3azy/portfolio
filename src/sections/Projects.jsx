import { sections } from "../constants";
import { SectionInfo, SectionWrapper } from "../components";
import { ProjectList } from "../components";
import useSetActiveSection from "../hooks/useSetActiveSection";

const Projects = () => {
  const ref = useSetActiveSection("Projects");

  return (
    <SectionWrapper id="projects" Ref={ref}>
      <SectionInfo infos={sections.get("project")} animate={true} />
      <ProjectList />
    </SectionWrapper>
  );
};

export default Projects;
