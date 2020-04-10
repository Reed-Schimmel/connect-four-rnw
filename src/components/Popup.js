import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default ({ title, message, onPress, buttonTitle, isVisible }) => {
  return isVisible && (
    <View style={styles.backdrop}>
      <View style={styles.container}>
        <View style={styles.textBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
        </View>
        <View style={styles.buttonBox}>
          <Button
            onPress={onPress}
            title={buttonTitle}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 5,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center'
  },
  container: {
    margin: '25%',
    minWidth: '25%',
    minHeight: '15%',
    borderWidth: 1,
    flex: -1,
    backgroundColor: '#FFF',
    justifyContent: 'space-evenly',
    alignSelf: 'center'
  },
  textBox: {
    flex: 1,
    textAlign: 'center',
    padding: 5,
    justifyContent: 'flex-start',
    borderWidth: 1,
  },
  title: { fontWeight: 'bold', fontSize: 32, marginBottom: 10 },
  message: { fontSize: '16' },
  bottonBox: { padding: 5, flex: 1 },
});