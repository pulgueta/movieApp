import { FC } from "react";

import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

export interface Props {
  id?: string;
  title: string;
  description: string;
  image: string;
}

export const Card: FC<Props> = ({ title, description, image }): JSX.Element => {
  return (
    <Box
      h="17.5rem"
      w="25rem"
      bg="gray.700"
      border={2}
      borderColor="gray.800"
      rounded="xl"
    >
      <Box h="15rem" overflow="hidden" bgColor="gray.900" roundedTop="xl">
        <Image src={image} w="100%" opacity="0.5" />
      </Box>
      <Flex
        direction="column"
        justify="space-between"
        align="flex-end"
        justifyContent="space-between"
        px={6}
        py={4}
        bg="gray.700"
        h="100%"
        roundedBottom="xl"
      >
        <Box>
          <Heading textColor="gray.100">{title}</Heading>
          <Text textColor="gray.100">{description}</Text>
        </Box>

        <Box>
          <Button>Play</Button>
        </Box>
      </Flex>
    </Box>
  );
};
