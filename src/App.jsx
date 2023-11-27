import {
  ChakraProvider,
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./App.css";

function App() {
  const registerUser = () => {
    alert("Account has been successfully registered!");
    // alert(formik.values.name);
    // formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      name: yup.string().required("Enter your name").min(6),
      email: yup.string().required("Enter your email").email(),
      password: yup
        .string()
        .required("Please enter your password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
          "Must contain at least 6 characters, an uppercase, a lowercase, a number and a special case character"
        ),
    }),
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <ChakraProvider>
      <Container py="10">
        <Heading>User Register</Heading>
        <Box padding="4" border="1px solid lightgray" borderRadius="4px" mt="8">
          <form
            onSubmit={formik.handleSubmit}
            action="https://www.google.com"
            target="_blank"
            method="post"
          >
            <Stack spacing="3">
              <FormControl isInvalid={formik.errors.name}>
                <FormLabel>Name</FormLabel>
                <Input onChange={handleForm} type="text" name="name" />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.email}>
                <FormLabel>Email</FormLabel>
                <Input onChange={handleForm} type="email" name="email" id="" />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.password}>
                <FormLabel>Password</FormLabel>
                <Input
                  onChange={handleForm}
                  type="password"
                  name="password"
                  id=""
                />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="teal">
                Register Account
              </Button>
            </Stack>
          </form>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
