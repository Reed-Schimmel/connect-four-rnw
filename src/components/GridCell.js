import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const colors = { null: 'white', 1: 'red', 2: 'blue' };

export default ({ player, addPiece }) => (
  <TouchableOpacity
  disabled={player !== null}
  onPress={() => addPiece()}
  style={[
    styles.gamepiece,
    { backgroundColor: colors[player] },
  ]} />
);

const styles = StyleSheet.create({
  gamepiece: {
    borderRadius: '50%',
    borderColor: 'grey',
    borderWidth: 5,
    margin: '1%',
    flex: 1,
  },
});
