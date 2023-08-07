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
    p="48px 28px"
    >
      <CardBody p="0">
        <VStack rowGap="16px">
          {<Icon boxSize="70%" as={icon} />}
          <Text 
          color="brand.white"
          fontSize="32px"
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
}

export default ProffessionCard