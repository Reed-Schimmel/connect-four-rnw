import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import GridRow from './GridRow';
import { checkForWin } from '../functions';


/** 
 * board: (6 rows, 7 columns)
    [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
 */

const makeBoard = () => Array(6).fill(null).map(() => Array(7).fill(null));

const { height, width } = Dimensions.get("window");
export default ({ passUpSelectedPlayer, setWinner }) => {
  const [state, setState] = useState({
    board: makeBoard(),
    selectedPlayer: 1,
  });

  const makeAddPiece = (r, c) => () => {
    const newBoard = [...state.board];

    let i = 5;
    while (i >= 0) {
      if (newBoard[i][c] === null) {
        newBoard[i][c] = state.selectedPlayer;
        break;
      }
      i--;
    }

    const selectedPlayer = state.selectedPlayer === 1 ? 2 : 1;
    passUpSelectedPlayer(selectedPlayer);

    const winner = checkForWin(newBoard, i, c);
    console.log('winner is player:', winner);

    if (winner) {
      setWinner(winner, newBoard);
      setState({ board: makeBoard(), selectedPlayer: 1 }); // todo: ensure player 1 selected
    } else if (i === 0 && !newBoard[0].some(e => e === null)) {
      setWinner('stale');
    } else {
      setState({ board: newBoard, selectedPlayer });
    }
  };

  return (
    <View style={styles.grid}>
      {state.board.map((row, i) => <GridRow key={i} row={row} rowNum={i} makeAddPiece={makeAddPiece} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    borderWidth: 10,
    backgroundColor: 'purple',
    padding: 10,
    width: 0.8 * width,
    height: 0.8 * (6 / 7) * width,
    aspectRatio: 1,
  }
});
