import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import GameGrid from './src/components/GameGrid';
import Popup from './src/components/Popup';

export default () => {
  const [player, passUpSelectedPlayer] = useState(1);
  const [winner, setWinner] = useState(undefined);
  const [boardKey, setBoardKey] = useState(1); // used to recreate the board object.

  return (
    <View style={styles.container}>
      {winner && <Popup
        title="Game Over"
        message={winner === 'stale'
          ? "Stalemate!"
          : `Player ${winner} wins!`}
        onPress={() => { // reset state
          setWinner(undefined);
          setBoardKey(boardKey + 1);
          passUpSelectedPlayer(1);
        }}
        buttonTitle="Play Again"
        isVisible={winner}
      />}
      <GameGrid passUpSelectedPlayer={passUpSelectedPlayer} setWinner={setWinner} key={boardKey} />
      <View style={styles.playerButtonView}>
        <TouchableOpacity disabled
          style={[styles.playerButtons, (player === 1) && { backgroundColor: 'red' }]}
        >
          <Text style={styles.playerText}>Player 1</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled
          style={[styles.playerButtons, (player === 2) && { backgroundColor: 'blue' }]}
        >
          <Text style={styles.playerText}>Player 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerButtonView: {
    flexDirection: 'row',
    alignContent: 'space-around',
    width: '100%',
    justifyContent: 'center'
  },
  playerButtons: {
    margin: 20,
    minWidth: '10%',
    height: '100%',
    borderWidth: 2,
    borderRadius: '5%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  playerText: { // TODO: text scaling
    fontSize: '120%',
    color: 'white',
    flex: 1,
  },
});
