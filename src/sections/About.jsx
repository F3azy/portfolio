import { useEffect, useRef } from "react";
import { useIsInViewport } from "../hooks/useIsInView";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { professions, sections } from "../constants";
import { staggerContainer } from "../utils/motion";
import { SectionInfo, ProffessionCard, SectionWrapper } from "../components";

const About = ({ setActive }) => {
  const AboutRef = useRef(null);
  const isInViewPort = useIsInViewport(AboutRef);

  useEffect(() => {
    if (isInViewPort) if (setActive) setActive("About");
  }, [isInViewPort]);

  return (
    <SectionWrapper id="about" Ref={AboutRef}>
      <SectionInfo infos={sections.get("about")} animate={true} />
      <Grid
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer(0.5, 0.5)}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={{ base: "40px", xl: "20px" }}
      >
        {professions.map((profession) => (
          <GridItem key={profession.name}>
            <ProffessionCard name={profession.name} icon={profession.icon} />
          </GridItem>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default About;
