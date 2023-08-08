import { 
  Flex, 
  FormControl, 
  FormLabel, 
  Input,
  Textarea,
  Button,
  VStack
} from '@chakra-ui/react';
import { sections } from '../constants';
import SectionInfo from './SectionInfo';

const Contact = () => {
  return (
    <Flex 
    direction="column"
    rowGap={{base: "44px", lg: "0"}}
    justify="space-evenly"
    h={{lg: "100vh"}} 
    p={{base: "44px 0", lg: "88px 0"}} 
    >
      <Flex 
      direction="column"
      bg="brand.dark.600"
      borderRadius="16px"
      p={{base: "12px", lg: "36px"}}
      rowGap={{base: "32px", lg: "40px"}}
      >
        <SectionInfo infos={sections.get("contact")} />
        <VStack as="form" align="flex-end" rowGap="20px">
          <FormControl>
            <FormLabel 
            color="brand.white"
            fontWeight="bold"
            letterSpacing= "1px"
            >
              Your Name
            </FormLabel>
            <Input 
            type='text' 
            placeholder="Whats your name?" 
            bg="brand.dark.800"  
            border="none"
            _placeholder={{
              color: "brand.gray",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
            _hover={{
              borderColor: "brand.secondary"
            }}
            _focusVisible={{
              border:"1px solid #9A1C1C",
              borderColor: "brand.secondary"
            }}
            />
          </FormControl>
          <FormControl>
            <FormLabel 
            color="brand.white"
            fontWeight="bold"
            letterSpacing= "1px"
            >
              Your Email
            </FormLabel>
            <Input 
            type='email' 
            placeholder="Whats your email?" 
            bg="brand.dark.800" 
            border="none" 
            _placeholder={{
              color: "brand.gray",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
            _hover={{
              borderColor: "brand.secondary"
            }}
            _focusVisible={{
              border:"1px solid #9A1C1C",
              borderColor: "brand.secondary"
            }}
            />
          </FormControl>
          <FormControl>
            <FormLabel 
            color="brand.white"
            fontWeight="bold"
            letterSpacing= "1px"
            >
              Your Message
            </FormLabel>
            <Textarea 
            h="200px"
            resize="none" 
            placeholder="Whats do you want say?" 
            bg="brand.dark.800"  
            border="none"
            _placeholder={{
              color: "brand.gray",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
            _hover={{
              borderColor: "brand.secondary"
            }}
            _focusVisible={{
              border:"1px solid #9A1C1C",
              borderColor: "brand.secondary"
            }}
            />
          </FormControl>
          <Button 
          bg="brand.dark.800" 
          color="brand.white" 
          p="24px"
          fontWeight="bold"
          letterSpacing= "1px"
          _hover={{
            bg: "brand.dark.900" 
          }}
          _active={{
            bg: "brand.dark.700" 
          }}
          >
            Send
          </Button>
        </VStack>
      </Flex>
    </Flex>
  )
};

export default Contact;