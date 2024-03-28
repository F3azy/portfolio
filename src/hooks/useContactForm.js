import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";

const toastOptions = {
  position: "top",
  status: "success",
  duration: 9000,
  isClosable: true,
};

export default function useContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(
    !(form.name && form.email && form.message)
  );

  useEffect(() => {
    setIsSubmitDisabled(!(form.name && form.email && form.message));
  }, [form]);

  function handleChange(e) {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    if (isSubmitDisabled) {
      setIsLoading(false);
      toast({
        title: "Did you forget something?",
        description: "Please fill all the inputs, thank you!",
        position: "top",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    emailjs
      .send(
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
            ...toastOptions,
          });

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
            description:
              "Try again or just send me an e-mail to this adress: fcarvelli.work@gmail.com.",
            ...toastOptions,
          });
        }
      );
  }

  return { form, isLoading, isSubmitDisabled, handleChange, handleSubmit };
}
