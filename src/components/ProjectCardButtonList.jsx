import { BiLogoGithub } from "react-icons/bi";
import { RiEarthLine } from "react-icons/ri";
import ProjectCardButton from "./ProjectCardButton";
import { ButtonGroup } from "@chakra-ui/react";

const ProjectCardButtonList = ({url, githubUrl}) => {
  return (
    <ButtonGroup spacing={{ base: "4", md: "2", xl: "4" }}>
      <ProjectCardButton
        url={url}
        bg="brand.tertiary"
        color="brand.white"
        _hover={{
          bg: "brand.secondary",
          textDecoration: "none",
        }}
        _active={{
          bg: "brand.tertiary",
        }}
      >
        <RiEarthLine fontSize="24px" />
        Site
      </ProjectCardButton>
      <ProjectCardButton
        url={githubUrl}
        bg="#171515"
        color="brand.white"
        _hover={{
          bg: "#060404",
          textDecoration: "none",
        }}
        _active={{
          bg: "#171515",
        }}
      >
        <BiLogoGithub fontSize="24px" />
        Github
      </ProjectCardButton>
    </ButtonGroup>
  );
};

export default ProjectCardButtonList;
