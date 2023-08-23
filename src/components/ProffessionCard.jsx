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


const ProffessionCard = ({name, icon, index}) => {
  return (
    <Card 
    as={motion.div}
    initial="hidden"
    whileInView="visible"
    variants={fadeIn("right", "spring", index, 1)}
    bg="brand.dark.800" 
    border="1px solid" 
    borderColor="brand.primary" 
    borderRadius="16px"
    p={{base: "32px 96px", lg: "32px 28px"}}
    boxShadow="0 0 36px 1.8px #FF000055"
    height="100%"
    >
      <CardBody p="0">
        <VStack rowGap="16px">
          {<Icon boxSize="70%" as={icon} />}
          <Text 
          color="brand.white"
          fontSize={{base: "5vw", md: '3vw', lg: '2vw', '2xl': "1.5vw"}}
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