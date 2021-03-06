import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: "46%",
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
  buttonComponent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-between'
  }
});

export const Button = ({text, onPress = () => {} }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export const ButtonContainer = ({children}) => (
  // A literal container for buttons, children is passed as {} in Quiz.js
  <View style={styles.buttonComponent}>
    {children}
  </View>
);
