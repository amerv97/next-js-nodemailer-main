import {
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { values: initValues };

export default function Home() {
  const [state, setState] = useState(initState);

  const { values } = state;

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  return (
    <Container maxW="450px" mt={12}>
      <Heading>Contact</Heading>

      <FormControl isRequired isInvalid={!values.name} mb={5}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={!values.email} mb={5}>
        <FormLabel>Emain</FormLabel>
        <Input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl isRequired isInvalid={!values.subject} mb={5}>
        <FormLabel>Subject</FormLabel>
        <Input
          type="text"
          name="subject"
          value={values.subject}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl isRequired isInvalid={!values.message} mb={5}>
        <FormLabel>Message</FormLabel>
        <Textarea
          type="text"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
        />
      </FormControl>
    </Container>
  );
}
