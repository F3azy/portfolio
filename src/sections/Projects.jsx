import { useEffect, useRef } from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { projects, sections } from "../constants";
import { SectionInfo, ProjectCard, SectionWrapper } from "../components";
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { useIsInViewport } from "../hooks/useIsInView";
import { useActiveSection } from "../context/ActiveSectionContext";

const Projects = () => {
  const ProjectsRef = useRef(null);
  const isInViewPort = useIsInViewport(ProjectsRef);

  const {clicked, setActive} = useActiveSection();

  useEffect(() => {
    if (isInViewPort) if (!clicked && setActive) setActive("Projects");
  }, [isInViewPort]);

  return (
    <SectionWrapper id="projects" Ref={ProjectsRef}>
      <SectionInfo infos={sections.get("project")} animate={true} />
      <Grid
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer(0.5, 0.5)}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={{ base: "32px", xl: "20px" }}
      >
        {projects.map((project) => (
          <GridItem key={project.title}>
            <ProjectCard
              title={project.title}
              image={project.image}
              githubUrl={project.githubUrl}
              url={project.url}
              description={project.description}
              tags={project.tags}
            />
          </GridItem>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default Projects;
