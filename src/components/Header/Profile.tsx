import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Luiz Souza</Text>
          <Text color="gray.300" fontSize="small">luiz@dev.io</Text>
        </Box>
      )}

      <Avatar size="md" name="Louis Souza" src="http://github.com/LuizSouz404.png" />
    </Flex>
  )
}
