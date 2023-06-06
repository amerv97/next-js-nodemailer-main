import {
  Container,
  FormControl,
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
      <FormControl isRequired mb={5}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl isRequired mb={5}>
        <FormLabel>Emain</FormLabel>
        <Input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl isRequired mb={5}>
        <FormLabel>Subject</FormLabel>
        <Input
          type="text"
          name="subject"
          value={values.subject}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl isRequired mb={5}>
        <FormLabel>Message</FormLabel>
        <Textarea
          type="text"
          name="message"
          value={values.message}
          onChange={handleChange}
        />
      </FormControl>
    </Container>
  );
}
