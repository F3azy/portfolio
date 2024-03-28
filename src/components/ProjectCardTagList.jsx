import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const ProjectCardTagList = ({ tags }) => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="flex-start"
      flexWrap="wrap"
      columnGap="8px"
      mt="auto"
    >
      {tags.map((tag) => (
        <Text
          key={tag.name}
          color={tag.color}
          fontSize={{ base: "14px", "2xl": "16px" }}
          fontWeight="bold"
          letterSpacing="2px"
        >
          #{tag.name}
        </Text>
      ))}
    </Flex>
  );
};

export default ProjectCardTagList;
