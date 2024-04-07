import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import OthelloBoard from "../components/OthelloBoard";
import StartScreen from "../components/StartScreen";

const Index = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  const handleStart = (p1Name, p2Name) => {
    setPlayer1Name(p1Name);
    setPlayer2Name(p2Name);
    setGameStarted(true);
  };

  return (
    <Flex align="center" justify="center" h="100vh">
      {gameStarted ? <OthelloBoard player1Name={player1Name} player2Name={player2Name} /> : <StartScreen onStart={handleStart} />}
    </Flex>
  );
};

export default Index;
