import { useEffect, useRef } from "react";
import { sections } from "../constants";
import { SectionInfo, SectionWrapper } from "../components";
import { useIsInViewport } from "../hooks/useIsInView";
import { useActiveSection } from "../context/ActiveSectionContext";
import ProjectList from "../components/ProjectList";

const Projects = () => {
  const ProjectsRef = useRef(null);
  const isInViewPort = useIsInViewport(ProjectsRef);

  const { clicked, setActive } = useActiveSection();

  useEffect(() => {
    if (isInViewPort) if (!clicked && setActive) setActive("Projects");
  }, [isInViewPort]);

  return (
    <SectionWrapper id="projects" Ref={ProjectsRef}>
      <SectionInfo infos={sections.get("project")} animate={true} />
      <ProjectList />
    </SectionWrapper>
  );
};

export default Projects;
