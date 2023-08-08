import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { projects, sections } from '../constants';
import SectionInfo from './SectionInfo';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <Flex 
    direction="column"
    rowGap={{base: "44px", lg: "0"}}
    justify="space-evenly"
    h={{lg: "100vh"}} 
    p={{base: "44px 0", lg: "88px 0"}} 
    >
      <SectionInfo infos={sections.get("project")} />
      <Grid 
      templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)",lg: "repeat(3, 1fr)"}} 
      gap="40px"
      >
      {projects.map((project) => 
          <GridItem  key={project.title}>
            <ProjectCard 
            title={project.title} 
            image={project.image}
            githubUrl={project.githubUrl}
            url={project.url}
            description={project.description}
            tags={project.tags}
            />
          </GridItem>
      )}
      </Grid>
    </Flex>
  )
};

export default Projects;