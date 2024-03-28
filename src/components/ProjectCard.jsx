
import {
  Card,
  CardBody,
  Text,
  Image,
  Heading,
  Flex,
  Divider,
  CardFooter,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import ProjectCardButtonList from "./ProjectCardButtonList";
import ProjectCardTagList from "./ProjectCardTagList";

const ProjectCard = ({ project }) => {
  const { title, image, githubUrl, url, description, tags } = project;

  return (
    <Card
      as={motion.div}
      variants={fadeIn("right", "spring", 1)}
      bg="brand.dark.600"
      borderRadius="20px"
      p="12px"
      height="100%"
      rowGap="12px"
    >
      <CardBody p="0">
        <Flex direction="column" rowGap="12px" h="full">
          <Image src={image} borderRadius="8px" />
          <Heading
            as="h3"
            color="brand.white"
            fontSize="24px"
            fontWeight="bold"
            letterSpacing="2px"
          >
            {title}
          </Heading>
          <Text
            color="brand.gray"
            fontSize={{ base: "14px", "2xl": "16px" }}
            fontWeight="bold"
            letterSpacing="2px"
          >
            {description}
          </Text>
          <ProjectCardTagList tags={tags} />
        </Flex>
      </CardBody>
      <Divider borderColor="brand.dark.800" />
      <CardFooter p="0">
        <ProjectCardButtonList url={url} githubUrl={githubUrl} />
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
