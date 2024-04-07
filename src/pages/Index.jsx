import { Box } from "@chakra-ui/react";
import GameBoard from "../components/GameBoard";

const Index = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <GameBoard />
    </Box>
  );
};

export default Index;
