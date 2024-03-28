import { sections } from "../constants";
import { SectionInfo, SectionWrapper, ProjectList } from "../components";
import useSetActiveSection from "../hooks/useSetActiveSection";

const Projects = () => {
  const ref = useSetActiveSection("projects");

  return (
    <SectionWrapper id="projects" ref={ref}>
      <SectionInfo infos={sections.get("project")} animate={true} />
      <ProjectList />
    </SectionWrapper>
  );
};

export default Projects;
