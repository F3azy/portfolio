import { useEffect, useRef } from "react";
import { useIsInViewport } from "../hooks/useIsInView";
import { motion } from "framer-motion";
import { Flex } from "@chakra-ui/react";
import { sections, iconsCloud, cloudOptions } from "../constants";
import { SectionInfo, SectionWrapper } from "../components";
import { Cloud } from "react-icon-cloud";
import { zoomIn } from "../utils/motion";

const Tech = ({ setActive }) => {
  const TechRef = useRef(null);
  const isInViewPort = useIsInViewport(TechRef);

  useEffect(() => {
    if (isInViewPort) if (setActive) setActive("Technologies");
  }, [isInViewPort]);

  return (
    <SectionWrapper
      id="tech"
      Ref={TechRef}
      RowGap={{ base: "28px", xl: "8px" }}
    >
      <SectionInfo infos={sections.get("tech")} animate={true} />
      <Flex
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={zoomIn(0.75, 0.4)}
        w={{ base: "300px", sm: "400px", md: "500px", lg: "auto" }}
        mx="auto"
        justify="center"
      >
        <Cloud options={cloudOptions}>{iconsCloud}</Cloud>
      </Flex>
    </SectionWrapper>
  );
};

export default Tech;
