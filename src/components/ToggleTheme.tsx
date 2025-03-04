import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ToggleTheme = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
      <HStack>
          <Switch colorScheme='purple' isChecked={ colorMode === 'dark'} onChange={toggleColorMode}/>
          <Text>Dark Mode</Text>
    </HStack>
  )
}

export default ToggleTheme;