import ProffessionCard from "./ProfessionCard";
import { Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { professions } from "../constants";
import { staggerContainer } from "../utils/motion";

const ProfessionList = () => {
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
  );
};

export default ProfessionList;
