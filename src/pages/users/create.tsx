import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { SubmitHandler, useForm } from 'react-hook-form';

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  passowrd: yup.string().required("Senha obrigatória").min(6, "No mínimo 6 caracteres"),
  passowrd_confirmation: yup.string().oneOf([null, yup.ref('password')], "As senhas precisam ser iguais"),
})


export default function CreateUser() {
  const { register, formState, handleSubmit} = useForm({
    resolver: yupResolver(createUserFormSchema)
  });

  const {errors} = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values, event) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    event.preventDefault()
    console.log(values);
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6">
        <Sidebar />

        <Box as="form" onSubmit={handleSubmit(handleCreateUser)} flex="1" borderRadius={8} bg="gray.800" p={["6","8"]}>
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={["6","8"]}>
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input name="name" label="Nome Completo" error={errors.name} {...register("name")}/>
              <Input name="email" type="email" label="E-mail" error={errors.email} {...register("email")}/>
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input name="password" type="password" label="Senha" error={errors.password} {...register("password")}/>
              <Input name="password_confirmation" type="password" label="Confirmação da senha" error={errors.confirmation_password} {...register("confirmation_password")}/>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button isLoading={formState.isSubmitting} colorScheme="blue">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}