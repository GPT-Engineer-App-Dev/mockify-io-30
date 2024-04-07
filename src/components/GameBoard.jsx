import { Button, Grid, GridItem } from "@chakra-ui/react";

const GameBoard = () => {
  return (
    <Grid templateColumns="repeat(8, 1fr)" gap={1} bg="green.500" p={4}>
      {Array(64)
        .fill(null)
        .map((_, index) => (
          <GridItem key={index}>
            <Button w="100%" h="100%" bg="green.300" _hover={{ bg: "green.400" }} />
          </GridItem>
        ))}
    </Grid>
  );
};

export default GameBoard;
