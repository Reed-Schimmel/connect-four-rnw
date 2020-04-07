import React from 'react';
import { View, StyleSheet } from 'react-native';
import GridCell from './GridCell';

export default ({ row, rowNum, makeAddPiece }) => (
  <View style={styles.row}>
    {row.map((cell, i) => <GridCell key={`${rowNum}${i}`} player={cell} addPiece={makeAddPiece(rowNum, i)} />)}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flex: 1,
  },
});
