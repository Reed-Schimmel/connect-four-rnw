import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import GameGrid from './src/components/GameGrid';

export default () => {
  const [player, passUpSelectedPlayer] = useState(1);

  return (
    <View style={styles.container}>
      <GameGrid passUpSelectedPlayer={passUpSelectedPlayer} />
      <View style={styles.playerButtonView}>
        <TouchableOpacity disabled
          style={[styles.playerButtons, (player === 1) && { backgroundColor: 'red'}]}
        >
          <Text style={styles.playerText}>Player 1</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled
          style={[styles.playerButtons, (player === 2) && { backgroundColor: 'blue'}]}
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
    width: '10%',
    height: '100%',
    borderWidth: 2,
    borderRadius: '5%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    flexDirection: 'row'
  },
  playerText: {
    fontSize: '120%',
    color: 'white',
    flex: 1,
  },
});
