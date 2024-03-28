import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const ContactFormInput = (props) => {
  const { label } = props;
  return (
    <FormControl>
      <FormLabel color="brand.white" fontWeight="bold" letterSpacing="1px">
        {label}
      </FormLabel>
      <Input
        {...props}
        bg="brand.dark.800"
        border="none"
        _placeholder={{
          color: "brand.gray",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
        _hover={{
          borderColor: "brand.secondary",
        }}
        _focusVisible={{
          border: "1px solid #9A1C1C",
          borderColor: "brand.secondary",
        }}
        autoComplete="off"
      />
    </FormControl>
  );
};

export default ContactFormInput;
