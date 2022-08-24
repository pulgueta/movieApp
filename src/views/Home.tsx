import { FC } from "react";

import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { Card } from "../components";

const movies = [
  {
    id: "1",
    title: "Lightyear",
    description:
      "While spending years attempting to return home, marooned Space Ranger Buzz Lightyear encounters an army of ruthless robots commanded by Zurg who are attempting to steal his fuel source.",
    image:
      "https://imgs.search.brave.com/DiUvqMELBNRegkzEH3kacFA-mA5ZVJBBwIragp3RbFU/rs:fit:743:1100:1/g:ce/aHR0cDovL3d3dy5z/YWx0eXBvcGNvcm4u/Y28udWsvZmlsbS1p/bWFnZXMvbGlnaHR5/ZWFyLmpwZw",
  },
  {
    id: "2",
    title: "Cars",
    description:
      "A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family.",
    image:
      "https://imgs.search.brave.com/J5PPFJ08YpFXpEFuPbyl-Us-75Bi4lkWUJCxtWwtnNM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4t/aW1hZ2VzLTEubWVk/aXVtLmNvbS9tYXgv/MTYwMC8wKmdObXdj/Q20yUGU2b0hrTmMu/anBn",
  },
  {
    id: "3",
    title: "Speed Racer",
    description:
      "Young driver Speed Racer aspires to be champion of the racing world with the help of his family and his high-tech Mach 5 automobile.",
    image:
      "https://imgs.search.brave.com/Jikam_TjB61eJPpeYmxdAR_SHWZ04psR_AVMkf06tNo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGhlbW92aWVkYi5v/cmcvdC9wL29yaWdp/bmFsL3lRa3hwZVdl/TFJGUTVtS01QWHFZ/SGpJVE9FLmpwZw",
  },
  {
    id: "4",
    title: "Mortal Kombat",
    description:
      "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.",
    image:
      "https://imgs.search.brave.com/-2XWmywfKv9jocpH6QTyS1p2fnwEUVL7PRSePbwy-X4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGhlbW92aWVkYi5v/cmcvdC9wL29yaWdp/bmFsLzNqTDBMcHgw/c1RkaUNnR0hWU3Jw/dHN3dktLQS5qcGc",
  },
  {
    id: "5",
    title: "Tom & Jerry",
    description:
      "A chaotic battle ensues between Jerry Mouse, who has taken refuge in the Royal Gate Hotel, and Tom Cat, who is hired to drive him away before the day of a big wedding arrives.",
    image:
      "https://imgs.search.brave.com/qq7-89BMBwlwvzeccdiLvQi45Kz7MAMvZW3PQbKjnEE/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Et/L0FONjZTQXdjMUVY/dEttam5RQWpLX1po/a2E0NFNCMzRaei0z/RlVEeTlmZz1zOTAw/LW1vLWMtYzB4ZmZm/ZmZmZmYtcmotay1u/bw",
  },
];

export const Home: FC = (): JSX.Element => {
  return (
    <Grid
      minH="100vh"
      bg="blue.600"
      templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 2fr)", lg: "repeat(3, 1fr)"}}
      gap={6}
      placeItems="center"
    >
      {/* <Heading>Hello</Heading> */}
      {movies.map(({ id, title, description, image }) => {
        return (
          <GridItem key={id}>
            <Card title={title} description={description} image={image} />
          </GridItem>
        );
      })}
    </Grid>
  );
};
