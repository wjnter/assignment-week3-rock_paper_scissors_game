import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChoicesButton from './components/ChoicesButton';
import CHOICES from './Choices'
import ChoiceCard from './components/ChoiceCard';
import Result from './components/Result';
import { randomComputerChoice, getRoundOutcome } from './processFunc'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice: {},
      computerChoice: {},
      result: ''
    };
  }

  onChoicesPress = (choices) => {
    /*if onpress item.name === choice => userChoice will return choices.*/
    const userChoice = CHOICES.find(item => item.name === choices)
    const computerChoice = randomComputerChoice()
    const result = getRoundOutcome(userChoice.name, computerChoice.name)
    /* this.setState({userChoice: userChoice, computerChoice: computerChoice}) ES6 syntax*/
    this.setState({userChoice, computerChoice, result})
  }
  
  render() {
    console.log('renderding');
    console.log(this.state.result);
    return (
      <View style={styles.container}>
        <View style={styles.result}></View>
          <Result result={this.state.result} />
        <View style={styles.choicesContainer}>
          <ChoiceCard 
            userName='You'
            choices={this.state.userChoice}
          />
          <Text>VS</Text>
          <ChoiceCard 
            userName='Computer'
            choices={this.state.computerChoice}
          />
        </View>

        <View style={styles.choiceButtons}></View>
          <View>
            <ChoicesButton onButtonPress={this.onChoicesPress} />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ebee',
    justifyContent: 'center',
    alignItems: 'center'
  },
  result: {
    flex: 0.15,
  },
  displayMonitor: {
    flex: 0.5,
  },
  choiceButtons: {
    flex: 0.35,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  choicesContainer: {
    flex: 0.5,
    margin: 5,
    borderWidth: 2,
    //paddingTop: 100,
    shadowRadius: 5,
    //paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: {
      height: 5,
      width: 5
    },
  },
  choiceContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

