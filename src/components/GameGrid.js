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

const { width } = Dimensions.get("window");
export default ({ passUpSelectedPlayer, setWinner }) => {
  const [state, setState] = useState({
    board: makeBoard(),
    selectedPlayer: 1,
  });

  // H.O.F for game rows / pieces to customize this action for their location
  // Used to be important, now I think the higher order isn't needed, but
  // don't break what isn't broken.
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

    // change player and tell app state
    const selectedPlayer = state.selectedPlayer === 1 ? 2 : 1;
    passUpSelectedPlayer(selectedPlayer);

    const winner = checkForWin(newBoard, i, c);
    console.log('winner is player:', winner);

    if (winner) {
      setWinner(winner, newBoard);
    } else if (i === 0 && !newBoard[0].some(e => e === null)) {
      // if we just filled the top slot and there are no more open spaces
      // in the top slot, the game is over.
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
