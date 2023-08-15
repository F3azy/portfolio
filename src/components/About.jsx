import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { proffesions, sections } from '../constants';
import SectionInfo from './SectionInfo';
import ProffessionCard from './ProffessionCard';

const About = () => {
  return (
    <Flex 
    id="about"
    direction="column"
    rowGap={{base: "44px", xl: "88px"}}
    justify="center"
    minH={{lg: "100vh"}} 
    p={{base: "48px 0", xl: "88px 0"}} 
    >
      <SectionInfo infos={sections.get("about")} />
      <Grid 
      templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)"}} 
      gap={{base: "40px", xl: "20px"}}
      >
      {proffesions.map((proffesion) => 
          <GridItem  key={proffesion.name}>
            <ProffessionCard name={proffesion.name} icon={proffesion.icon} />
          </GridItem>
      )}
      </Grid>
    </Flex>
  )
};

export default About;