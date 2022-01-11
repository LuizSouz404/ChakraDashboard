import { Box, Button, Checkbox, Flex, Heading, HStack, Icon, Link, Spinner, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { RiAddLine, RiPencilLine, RiRestartLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";

export default function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, refetch, error } = useUsers(page);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function handlePrefetchUser(userID: string) {
    await queryClient.prefetchQuery(["user", userID], async () => {
      const response = await api.get(`users/${userID}`);

      return response.data;
    }, {
      staleTime: 1000 * 60 * 10,
    });
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
            </Heading>

            <HStack>
              <Button onClick={() => refetch()} as="a" size="sm" fontSize="sm" colorScheme="blue" leftIcon={<Icon as={RiRestartLine} fontSize="20"/>}>
                Atualizar
              </Button>
              <NextLink href="/users/create" passHref>
                <Button as="a" size="sm" fontSize="sm" colorScheme="blue" leftIcon={<Icon as={RiAddLine} fontSize="20"/>}>
                  Criar novo
                </Button>
              </NextLink>
            </HStack>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ): error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários.</Text>
            </Flex>
          ): (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="blue" />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    <Th width="8"></Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {data.users.map(user => {
                    return (
                    <Tr key={user.id}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="blue"/>
                      </Td>
                      <Td>
                        <Box>
                          <Link onMouseEnter={() => handlePrefetchUser(user.id)} color="blue.50">
                            <Text fontWeight="bold">{user.name}</Text>
                          </Link>
                          <Text fontSize="sm" color="gray.300">{user.email}</Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{user.createdAt}</Td>}
                      <Td>
                        {isWideVersion ? (
                          <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}>
                            Editar
                          </Button>

                        ) : (
                          <Button as="a" size="sm" fontSize="sm" colorScheme="purple">
                            <Icon as={RiPencilLine} fontSize="16" />
                          </Button>
                        )
                      }
                      </Td>
                    </Tr>
                    )
                  })}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}
