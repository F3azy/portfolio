import React from 'react';
import { 
    Card, 
    CardBody, 
    Icon, 
    VStack, 
    Text 
} from '@chakra-ui/react';


const ProffessionCard = ({name, icon}) => {
  return (
    <Card 
    bg="brand.dark.800" 
    border="1px solid" 
    borderColor="brand.primary" 
    borderRadius="16px"
    p={{base: "32px 96px", lg: "32px 28px"}}
    boxShadow="0 0 36px 1.8px #FF000055"
    >
      <CardBody p="0">
        <VStack rowGap="16px">
          {<Icon boxSize="70%" as={icon} />}
          <Text 
          color="brand.white"
          fontSize={{base: "18px", '2xl': "24px"}}
          fontWeight="bold"
          textAlign="center"
          letterSpacing="2px"
          >
            {name}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  )
};

export default ProffessionCard;