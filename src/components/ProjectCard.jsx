import React from 'react';
import { 
    Card, 
    CardBody, 
    Link, 
    Text, 
    Image,
    Heading,
    Box,
    Flex,
    Icon
} from '@chakra-ui/react';
import { BiLogoGithub } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';


const ProjectCard = ({title, image, githubUrl, url, description, tags, index}) => {
  return (
    <Card 
    as={motion.div}
    initial="hidden"
    whileInView="visible"
    variants={fadeIn("right", "spring", index, 1)}
    bg="brand.dark.600" 
    borderRadius="16px"
    p="12px"
    >
      <CardBody p="0">
        <Flex direction="column" rowGap="10px">
            <Box position="relative">
                <Image src={image} borderRadius="8px" />
                <Link 
                href={githubUrl} 
                isExternal
                >
                <Icon 
                color="#171515"
                bg="brand.white"
                borderRadius="full"
                // color="brand.secondary"
                boxSize={10}
                as={BiLogoGithub} 
                position="absolute" 
                top="3" 
                right="3"
                transition="transform 0.5s ease"
                _hover={{
                    transform: "scale(1.2)"
                }} 
                />
                </Link>
            </Box>
            <Heading 
            as="h3"
            color="brand.white"
            fontSize="24px"
            fontWeight="bold"
            letterSpacing="2px"
            >
                {title}
            </Heading>
            <Text 
            color="brand.gray"
            fontSize={{base: "14px", '2xl': "16px"}}
            fontWeight="bold"
            letterSpacing="2px"
            >
                {description}
            </Text>
            <Box 
            display="flex" 
            flexDirection="row" 
            justifyContent="flex-start"
            columnGap="8px"
            >
            {tags.map((tag) => 
                <Text 
                key={tag.name}
                color={tag.color}
                fontSize={{base: "14px", '2xl': "16px"}}
                fontWeight="bold"
                letterSpacing="2px"
                >
                    #{tag.name}
                </Text>
            )}
            </Box>
        </Flex>
      </CardBody>
    </Card>
  )
};

export default ProjectCard;