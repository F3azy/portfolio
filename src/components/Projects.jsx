import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { projects, sections } from '../constants';
import SectionInfo from './SectionInfo';
import ProjectCard from './ProjectCard';
import SectionWrapper from './SectionWrapper';

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <SectionInfo infos={sections.get("project")} animate={true} />
      <Grid 
      templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)"}} 
      gap={{base: "32px", xl: "20px"}}
      >
      {projects.map((project, index) => 
          <GridItem key={project.title}>
            <ProjectCard 
            title={project.title} 
            image={project.image}
            githubUrl={project.githubUrl}
            url={project.url}
            description={project.description}
            tags={project.tags}
            index={(index+1)*0.75} 
            />
          </GridItem>
      )}
      </Grid>
    </SectionWrapper>
  )
};

export default Projects;