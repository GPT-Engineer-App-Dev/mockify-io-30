import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const StartScreen = ({ onStart }) => {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  const handleStart = () => {
    onStart(player1Name, player2Name);
  };

  return (
    <Flex direction="column" align="center" justify="center" h="100vh">
      <Text fontSize="2xl" mb={8}>
        Welcome to Othello!
      </Text>
      <Input placeholder="Player 1 Name" value={player1Name} onChange={(e) => setPlayer1Name(e.target.value)} mb={4} />
      <Input placeholder="Player 2 Name" value={player2Name} onChange={(e) => setPlayer2Name(e.target.value)} mb={8} />
      <Button onClick={handleStart}>Start Game</Button>
    </Flex>
  );
};

export default StartScreen;
