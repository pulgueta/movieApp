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

import { useNavigate } from "react-router-dom";

import { firebaseLogin } from "../firebase/utils/settings";
import { loginProps } from "../interfaces/types";

export const Login: FC = (): JSX.Element => {
  const [data, setData] = useState<loginProps>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    firebaseLogin(data);

    navigate("/");
  };

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
          <FormControl>
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
            <Button
              colorScheme={"messenger"}
              onClick={(e: any) => handleLogin(e)}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};
