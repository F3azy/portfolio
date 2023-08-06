import { Flex } from '@chakra-ui/react';
import { sections } from '../constants';
import SectionInfo from './SectionInfo';

const About = () => {
  return (
    <Flex 
    direction="column"
    rowGap="88px"
    h={{lg: "100vh"}} 
    p={{base: "44px 0", lg: "88px 0"}} 
    >
      <SectionInfo infos={sections.get("about")} />
    </Flex>
  )
};

export default About;