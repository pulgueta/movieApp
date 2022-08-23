import { FC, useState } from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

interface stateProps {
  email: string;
  password: string;
}

export const Login: FC = (): JSX.Element => {
  const [data, setData] = useState<stateProps>({
    email: "",
    password: "",
  });

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue("gray.400", "gray.800")}
    >
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={4} minW="16rem">
          <Heading textAlign="center">Account login</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={data.email}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </FormControl>
          <Stack spacing={10}>
            <Button colorScheme={"messenger"} onClick={() => console.log(data)}>Sign in</Button>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};
