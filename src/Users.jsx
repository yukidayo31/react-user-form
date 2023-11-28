import React from "react";
import MainNav from "./MainNav";
import { Box, Container, Heading } from "@chakra-ui/react";

function Users() {
  return (
    <>
      <Container py="10">
        <MainNav />
        <Heading>Users Data</Heading>
        <Box
          padding="4"
          border="1px solid lightgray"
          borderRadius="4px"
          mt="8"
        ></Box>
      </Container>
    </>
  );
}

export default Users;
