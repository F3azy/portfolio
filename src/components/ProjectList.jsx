import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { projects } from "../constants";
import { ProjectCard } from "../components";
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";

const ProjectList = () => {
  return (
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
  );
};

export default ProjectList;
