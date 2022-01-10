import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";

import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" mt="4" px="4" align="center">
      <Text fontSize="3xl" fontWeight="bold" letterSpace="tight" w="64">
        UIBoard | Chakra 
        <Text as="span" ml="1" color="blue.500">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="2"
        px="4"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input color="gray.50" variant="unstyled" px="4" mr="4" placeholder="Buscar na plataforma" _placeholder={{ color: "gray.400"}}/>

        <Icon as={RiSearchLine} fontSize="28"/>
      </Flex>

      <Flex
        align="center"
        ml="auto"
      >
        <HStack spacing="8" mx="8" pr="8" py="1" color="gray.300" borderRightWidth={1} borderColor="gray.700">
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Luiz Souza</Text>
            <Text color="gray.300" fontSize="small">luiz@dev.io</Text>
          </Box>

          <Avatar size="md" name="Louis Souza" src="http://github.com/LuizSouz404.png" />
        </Flex>
      </Flex>
    </Flex>
  )
}