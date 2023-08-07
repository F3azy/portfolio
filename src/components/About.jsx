import { Card, CardBody, Flex, Grid, GridItem, Icon, VStack, Text } from '@chakra-ui/react';
import { proffesions, sections } from '../constants';
import SectionInfo from './SectionInfo';

const About = () => {
  return (
    <Flex 
    direction="column"
    rowGap={{base: "44px", lg: "0"}}
    justify="space-evenly"
    h={{lg: "100vh"}} 
    p={{base: "44px 0", lg: "88px 0"}} 
    >
      <SectionInfo infos={sections.get("about")} />
      <Grid 
      templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)",lg: "repeat(4, 1fr)"}} 
      gap="40px"
      >
      {proffesions.map((proffesion) => 
          <GridItem>
            <Card 
            key={proffesion.name}
            bg="brand.dark.800" 
            border="1px solid" 
            borderColor="brand.primary" 
            borderRadius="16px"
            p="48px 28px"
            >
              <CardBody p="0">
                <VStack rowGap="16px">
                  {<Icon boxSize="70%" as={proffesion.icon} />}
                  <Text 
                  color="brand.white"
                  fontSize="32px"
                  fontWeight="bold"
                  textAlign="center"
                  letterSpacing="2px"
                  >
                    {proffesion.name}
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </GridItem>
      )}
      </Grid>
    </Flex>
  )
};

export default About;