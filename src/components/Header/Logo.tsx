import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text fontSize="3xl" fontWeight="bold" letterSpace="tight" w="64">
      UIBoard | Chakra 
      <Text as="span" ml="1" color="blue.500">.</Text>
    </Text>
  )
}