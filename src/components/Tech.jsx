import { Flex } from '@chakra-ui/react';
import { sections, iconsCloud, cloudOptions } from '../constants';
import SectionInfo from './SectionInfo';
import { Cloud } from "react-icon-cloud";

const Tech = () => {
  return (
    <Flex 
    id="tech"
    direction="column"
    rowGap={{base: "44px", xl: "88px"}}
    justify="center"
    minH={{lg: "100vh"}} 
    p={{base: "48px 0", xl: "88px 0"}} 
    >
      <SectionInfo infos={sections.get("tech")} />
      <Flex w={{base: "300px", sm: "400px", md: "500px", lg: "auto"}} mx="auto" justify="center">
        <Cloud options={cloudOptions}>
          {iconsCloud}
        </Cloud>
      </Flex>
    </Flex>
  )
};

export default Tech;