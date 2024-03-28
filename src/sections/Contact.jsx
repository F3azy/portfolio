import { Flex } from "@chakra-ui/react";
import { sections } from "../constants";
import { SectionInfo, SectionWrapper, ContactForm } from "../components";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import useSetActiveSection from "../hooks/useSetActiveSection";

const Contact = () => {
  const ref = useSetActiveSection("contact");

  return (
    <SectionWrapper id="contact" ref={ref}>
      <Flex
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn("up", "", 0.75, 0.1)}
        direction="column"
        bg="brand.dark.600"
        borderRadius="16px"
        p={{ base: "12px", lg: "36px" }}
        rowGap={{ base: "16px", lg: "20px" }}
      >
        <SectionInfo infos={sections.get("contact")} />
        <ContactForm />
      </Flex>
    </SectionWrapper>
  );
};

export default Contact;
