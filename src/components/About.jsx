import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { proffesions, sections } from '../constants';
import SectionInfo from './SectionInfo';
import ProffessionCard from './ProffessionCard';
import SectionWrapper from './SectionWrapper';

const About = () => {
  return (
    <SectionWrapper id="about">
      <SectionInfo infos={sections.get("about")} />
      <Grid 
      templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)"}} 
      gap={{base: "40px", xl: "20px"}}
      >
      {proffesions.map((proffesion, index) => 
          <GridItem  key={proffesion.name}>
            <ProffessionCard 
            name={proffesion.name} 
            icon={proffesion.icon} 
            index={(index+1)*0.75} 
            />
          </GridItem>
      )}
      </Grid>
    </SectionWrapper>
  )
};

export default About;