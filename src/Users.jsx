import { React, useState, useEffect } from "react";

import MainNav from "./MainNav";
import {
  Box,
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function Users() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/accounts")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setAccounts(res);
      })
      .catch((err) => {
        console.log("err => ", err);
      });
  }, []);

  return (
    <>
      <Container py="10">
        <MainNav />
        <Heading>Users Data</Heading>

        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>Network Call Practice</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Password</Th>
              </Tr>
            </Thead>
            <Tbody>
              {accounts.map((user, index) => {
                return (
                  <Tr key={index}>
                    <Td>{user.name}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.password}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default Users;
