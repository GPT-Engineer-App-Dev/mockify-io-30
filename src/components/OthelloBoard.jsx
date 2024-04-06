import { Grid, GridItem, Circle } from "@chakra-ui/react";
import { useState } from "react";

const OthelloBoard = () => {
  const [board, setBoard] = useState(Array(64).fill(null));

  const getCellColor = (cell) => {
    if (cell === 1) return "green.500";
    if (cell === 2) return "white";
    return "gray.100";
  };

  return (
    <Grid templateColumns="repeat(8, 1fr)" gap={1} bg="gray.400" p={2}>
      {board.map((cell, index) => (
        <GridItem key={index} w="100%" h="10" bg="gray.100" display="flex" alignItems="center" justifyContent="center">
          <Circle size="32px" bg={getCellColor(cell)} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default OthelloBoard;
