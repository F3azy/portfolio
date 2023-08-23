import { 
  Flex, 
  FormControl, 
  FormLabel, 
  Input,
  Textarea,
  Button,
  VStack,
  useToast
} from '@chakra-ui/react';
import { sections } from '../constants';
import SectionInfo from './SectionInfo';
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Francesco",
        from_email: form.email,
        reply_to: form.email,
        to_email: "fcarvelli.work@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        setIsLoading(false);

        toast({
          title: "Email sent.",
          description: "Thank you, I will responde as soon as possible.",
          position: "top",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setIsLoading(false);
        console.error(error);

        toast({
          title: "Something went wrong.",
          description: "Try again or just send me an e-mail to this adress fcarvelli.work@gmail.com.",
          position: "top",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
    );
  }

  return (
    <SectionWrapper id="contact">
      <Flex 
      as={motion.div}
      initial="hidden"
      whileInView="visible"
      variants={fadeIn("up", "", 0.1, 0.75)}      
      direction="column"
      bg="brand.dark.600"
      borderRadius="16px"
      p={{base: "12px", lg: "36px"}}
      rowGap={{base: "16px", lg: "20px"}}
      >
        <SectionInfo infos={sections.get("contact")} />
        <VStack as="form" onSubmit={handleSubmit} align="flex-end" rowGap={{base: "20px"}}>
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
            name='name'
            value={form.name}
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
            autoComplete='off'
            onChange={handleChange}
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
            name='email'
            value={form.email}
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
            autoComplete='off'
            onChange={handleChange}
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
            name='message'
            value={form.message}
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
            onChange={handleChange}
            />
          </FormControl>
          <Button 
          type="submit"
          isLoading={isLoading}
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
    </SectionWrapper>
  )
};

export default Contact;