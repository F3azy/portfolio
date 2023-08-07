import { Flex, Text } from '@chakra-ui/react';
import { sections } from '../constants';
import SectionInfo from './SectionInfo';

const Tech = () => {
  return (
    <Flex 
    direction="column"
    rowGap={{base: "44px", lg: "0"}}
    justify="space-evenly"
    h={{lg: "100vh"}} 
    p={{base: "44px 0", lg: "88px 0"}} 
    >
      <SectionInfo infos={sections.get("tech")} />
    </Flex>
  )
};

export default Tech;