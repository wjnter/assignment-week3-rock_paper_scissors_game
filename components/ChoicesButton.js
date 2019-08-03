import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CHOICES from '../Choices'

const ChoicesButton = props => {
  return (
    <View>
        { CHOICES.map(choices => {
      return(
          <TouchableOpacity 
            style={styles.buttonStyle} 
            key={choices.name}
            onPress={() => props.onButtonPress(choices.name)}>
            <Text style={styles.buttonText}>{choices.name}</Text>
          </TouchableOpacity>
        )
    })}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 200,
    margin: 10,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#640D14',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
})
export default ChoicesButton;
