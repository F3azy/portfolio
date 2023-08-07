import { Box, Heading, Text } from "@chakra-ui/react";

const SectionInfo = ({infos}) => {
  return (
    <Box>
      <Heading 
      as="h2" 
      fontSize="16px" 
      color="brand.gray"
      letterSpacing="1px"
      >
        {infos.subTitle}
      </Heading>
      <Heading 
      as="h1" 
      fontSize="48px"
      >
        {infos.title}
      </Heading>
      <Text 
      fontSize="18px" 
      lineHeight="24px"
      color="brand.gray"
      letterSpacing="2px"
      fontWeight="bold"
      mt="16px"
      >
        {infos.description}
      </Text>
    </Box>
  )
};

export default SectionInfo;