import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CHOICES = [
  {
    name: 'rock',
    uri: ''
  },
  {
    name: 'paper',
    uri: ''
  },
  {
    name: 'scissors',
    uri: ''
  }
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result}></View>
        <View style={styles.displayMonitor}></View>
        <View style={styles.choiceButtons}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9ebee'
  },
  result: {
    flex: 0.15,
    backgroundColor: 'cyan'
  },
  displayMonitor: {
    flex: 0.5,
    backgroundColor: 'pink'
  },
  choiceButtons: {
    flex: 0.35,
    backgroundColor: 'gray'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: {
      eight: 5,
      width: 5
    },
  },
  choiceContainer: {
    flex: 1,
    alignItems: 'center',
  },
  choiceDescription: {
    fontSize: 25,
    color: '#250902',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  choiceCardTitle: {
    fontSize: 30,
    color: '#250902'
  },
  choiceImage: {
    width: 150,
    height: 150,
    padding: 10,
  }
});

