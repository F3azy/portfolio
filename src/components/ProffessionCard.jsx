import React from 'react';
import { 
    Card, 
    CardBody, 
    Icon, 
    VStack, 
    Text 
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';


const ProffessionCard = ({name, icon}) => {
  return (
    <Card 
    as={motion.div}
    variants={fadeIn("right", "spring", 1)}
    bg="brand.dark.800" 
    border="1px solid" 
    borderColor="brand.primary" 
    borderRadius="16px"
    p={{base: "32px 56px", lg: "32px 28px"}}
    boxShadow="0 0 36px 1.8px #FF000055"
    height="100%"
    >
      <CardBody p="0">
        <VStack rowGap="16px">
          {<Icon boxSize={{base: "50%", lg: "70%"}} as={icon} />}
          <Text 
          color="brand.white"
          fontSize={{base: "5vw", md: '2.5vw', lg: '1.3vw', '2xl': "1.1vw"}}
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