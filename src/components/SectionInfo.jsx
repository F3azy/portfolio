import { Box, Heading, Text } from "@chakra-ui/react";

const SectionInfo = ({infos}) => {
  return (
    <Box>
      <Heading 
      as="h2" 
      fontSize={{base: "12px", sm: "14px", md: "16px"}} 
      color="brand.gray"
      letterSpacing="3px"
      >
        {infos.subTitle}
      </Heading>
      <Heading 
      as="h1" 
      fontSize={{base: "36px",sm: "40px", md: "48px"}}
      >
        {infos.title}
      </Heading>
      <Text 
      fontSize={{base: "14px", sm: "16px", md: "18px"}} 
      lineHeight={{base: "20px", sm: "22px", md: "24px"}}
      color="brand.gray"
      letterSpacing="2px"
      fontWeight="bold"
      mt={{base: "8px", md: "16px"}}
      >
        {infos.description}
      </Text>
    </Box>
  )
};

export default SectionInfo;