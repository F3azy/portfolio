import { Flex } from '@chakra-ui/react';
import { sections, iconsCloud, cloudOptions } from '../constants';
import SectionInfo from './SectionInfo';
import { Cloud } from "react-icon-cloud";

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
      <Flex justify="center">
        <Cloud options={cloudOptions}>
          {iconsCloud}
        </Cloud>
      </Flex>
    </Flex>
  )
};

export default Tech;