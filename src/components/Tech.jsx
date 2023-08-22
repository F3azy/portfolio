import { Flex } from '@chakra-ui/react';
import { sections, iconsCloud, cloudOptions } from '../constants';
import SectionInfo from './SectionInfo';
import { Cloud } from "react-icon-cloud";
import SectionWrapper from './SectionWrapper';

const Tech = () => {
  return (
    <SectionWrapper id="tech" RowGap={{base: "28px", xl: "8px"}}>  
      <SectionInfo infos={sections.get("tech")} />
      <Flex w={{base: "300px", sm: "400px", md: "500px", lg: "auto"}} mx="auto" justify="center">
        <Cloud options={cloudOptions}>
          {iconsCloud}
        </Cloud>
      </Flex>
    </SectionWrapper>
  )
};

export default Tech;