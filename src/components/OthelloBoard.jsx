import { Grid, GridItem, Circle, Text } from "@chakra-ui/react";
import { useState } from "react";

const OthelloBoard = () => {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const getValidMoves = (board, player) => {
    const validMoves = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if (board[row][col] !== 0) continue;
        const directions = [
          [-1, -1],
          [-1, 0],
          [-1, 1],
          [0, -1],
          [0, 1],
          [1, -1],
          [1, 0],
          [1, 1],
        ];
        for (let d of directions) {
          let r = row + d[0];
          let c = col + d[1];
          let flipped = [];
          while (r >= 0 && r < 8 && c >= 0 && c < 8) {
            if (board[r][c] === 0) break;
            if (board[r][c] === player) {
              if (flipped.length > 0) {
                validMoves.push([row, col]);
              }
              break;
            }
            flipped.push([r, c]);
            r += d[0];
            c += d[1];
          }
        }
      }
    }
    return validMoves;
  };

  const makeMove = (board, row, col, player) => {
    const newBoard = board.map((row) => row.slice());
    newBoard[row][col] = player;
    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    for (let d of directions) {
      let r = row + d[0];
      let c = col + d[1];
      let flipped = [];
      while (r >= 0 && r < 8 && c >= 0 && c < 8) {
        if (newBoard[r][c] === 0) break;
        if (newBoard[r][c] === player) {
          for (let f of flipped) {
            newBoard[f[0]][f[1]] = player;
          }
          break;
        }
        flipped.push([r, c]);
        r += d[0];
        c += d[1];
      }
    }
    return newBoard;
  };

  const checkGameOver = (board) => {
    const validMoves1 = getValidMoves(board, 1);
    const validMoves2 = getValidMoves(board, 2);
    if (validMoves1.length === 0 && validMoves2.length === 0) {
      let count1 = 0;
      let count2 = 0;
      for (let row of board) {
        for (let cell of row) {
          if (cell === 1) count1++;
          if (cell === 2) count2++;
        }
      }
      if (count1 > count2) {
        setWinner(1);
      } else if (count2 > count1) {
        setWinner(2);
      } else {
        setWinner(0);
      }
      setGameOver(true);
    }
  };

  const handleClick = (row, col) => {
    if (gameOver) return;
    if (board[row][col] !== 0) return;
    const validMoves = getValidMoves(board, currentPlayer);
    if (!validMoves.some(([r, c]) => r === row && c === col)) return;
    const newBoard = makeMove(board, row, col, currentPlayer);
    setBoard(newBoard);
    setCurrentPlayer(3 - currentPlayer);
    checkGameOver(newBoard);
  };

  const getCellColor = (cell) => {
    if (cell === 1) return "black";
    if (cell === 2) return "white";
    return "green.100";
  };

  return (
    <Grid templateColumns="repeat(8, 1fr)" gap={1} bg="green.500" p={2}>
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <GridItem key={`${rowIndex}-${colIndex}`} w="100%" h="10" bg="gray.100" display="flex" alignItems="center" justifyContent="center" onClick={() => handleClick(rowIndex, colIndex)}>
            <Circle size="32px" bg={getCellColor(cell)} />
          </GridItem>
        )),
      )}
      {gameOver && <Text>{winner === 0 ? "It's a tie!" : `Player ${winner} wins!`}</Text>}
    </Grid>
  );
};

export default OthelloBoard;
