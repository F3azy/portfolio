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
    Icon,
    Divider,
    ButtonGroup,
    Button,
    CardFooter
} from '@chakra-ui/react';
import { BiLogoGithub } from 'react-icons/bi';
import { RiEarthLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';


const ProjectCard = ({title, image, githubUrl, url, description, tags}) => {
  return (
    <Card 
    as={motion.div}
    variants={fadeIn("right", "spring", 1)}
    bg="brand.dark.600" 
    borderRadius="16px"
    p="12px"
    height="100%"
    rowGap="12px"
    >
      <CardBody p="0">
        <Flex direction="column" rowGap="12px" h="full">
            <Image src={image} borderRadius="8px" />
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
            <Flex 
            flexDirection="row" 
            justifyContent="flex-start"
            flexWrap="wrap"
            columnGap="8px"
            mt="auto"
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
            </Flex>
        </Flex>
      </CardBody>
      <Divider borderColor="brand.dark.800" />
      <CardFooter p="0">
        <ButtonGroup spacing={{base: '4', md: '2', xl: '4'}}>
          <Button 
          as={Link}
          href={url}
          onClick={!url ? ((ev) => ev.preventDefault()) : null}
          bg="brand.tertiary" 
          color="brand.white" 
          borderRadius="full" 
          columnGap="8px"
          _hover={{
            bg: "brand.secondary",
            textDecoration: "none",
          }}
          _active={{
            bg: "brand.tertiary" 
          }}
          isExternal
          isDisabled={!url}
          >
            <RiEarthLine fontSize="24px" />
            Site
          </Button>
          <Button 
          as={Link}
          href={githubUrl}
          onClick={!githubUrl ? ((ev) => ev.preventDefault()) : null}
          bg="#171515" 
          color="brand.white" 
          borderRadius="full" 
          columnGap="8px"
          _hover={{
            bg: "#060404",
            textDecoration: "none",
          }}
          _active={{
            bg: "#171515" 
          }}
          isExternal
          isDisabled={!githubUrl}
          >
            <BiLogoGithub fontSize="24px" />
            Github
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
};

export default ProjectCard;