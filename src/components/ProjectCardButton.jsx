import { Button, Link } from "@chakra-ui/react";
import React from "react";

const ProjectCardButton = (props) => {
  const { url, children } = props;

  return (
    <Button
      as={Link}
      href={url}
      isExternal
      isDisabled={!url}
      onClick={!url ? (ev) => ev.preventDefault() : null}
      columnGap="8px"
      borderRadius="full"
      {...props}
    >
      {children}
    </Button>
  );
};

export default ProjectCardButton;
