import { Textarea, Button, VStack } from "@chakra-ui/react";
import ContactFormInput from "./ContactFormInput";
import useContactForm from "../hooks/useContactForm";

const ContactForm = () => {
  const { form, isLoading, isSubmitDisabled, handleChange, handleSubmit } =
    useContactForm();

  return (
    <VStack
      as="form"
      onSubmit={handleSubmit}
      align="flex-end"
      rowGap={{ base: "20px" }}
    >
      <ContactFormInput
        label="Your Name"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Whats your name?"
      />
      <ContactFormInput
        label="Your Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Whats your email?"
      />
      <ContactFormInput
        as={Textarea}
        label="Your Message"
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Whats do you want say?"
        h="200px"
        resize="none"
      />
      <Button
        type="submit"
        isLoading={isLoading}
        isDisabled={isSubmitDisabled}
        bg="brand.dark.800"
        color="brand.white"
        p="24px"
        fontWeight="bold"
        letterSpacing="1px"
        _hover={{
          bg: "brand.dark.900",
        }}
        _active={{
          bg: "brand.dark.700",
        }}
      >
        Send
      </Button>
    </VStack>
  );
};

export default ContactForm;
