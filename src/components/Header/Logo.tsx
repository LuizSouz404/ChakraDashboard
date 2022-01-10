import { Text } from "@chakra-ui/react";

interface LogoProps {
  showLogoFull: boolean;
}

export function Logo({ showLogoFull = true }: LogoProps) {
  return (
    <>
      {showLogoFull ? (
        <Text fontSize={["2xl", "3xl"]} fontWeight="bold" letterspace="tight" w="64">
          ChakraBoard
          <Text as="span" ml="1" color="blue.500">.</Text>
        </Text>

      ) : (
        <Text fontSize={["2xl", "3xl"]} fontWeight="bold" letterspace="tight" w="64">
          CBoard
          <Text as="span" ml="1" color="blue.500">.</Text>
        </Text>
      )}
    </>
  )
}
