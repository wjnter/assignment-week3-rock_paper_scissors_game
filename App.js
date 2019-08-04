import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChoicesButton from './components/ChoicesButton';
import CHOICES from './Choices'
import ChoiceCard from './components/ChoiceCard';
import Result from './components/Result';
import ResultCount from './components/ResultCount';
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
    this.setState({ userChoice, computerChoice, result })
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.result}>
          <Result result={this.state.result} />
        </View>

        <View style={styles.displayMonitor}>
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
        </View>

        <View style={styles.count}>
          <ResultCount 
            result='Victory'
            countResult='1'
          />
          <ResultCount 
            result='Tie Game'
            countResult='3'
          />
          <ResultCount 
            result='Defeat'
            countResult='1'
          />
        </View>

        <View style={styles.choiceButtons}>
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
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  result: {
    flex: 0.15,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  displayMonitor: {
    flex: 0.35,
    backgroundColor: 'red',
  },
  choicesContainer: {
    height: null,
    width: null,
    //margin: 5,
    borderWidth: 2,
    //paddingTop: 100,
    //paddingBottom: 100,
    borderColor: 'grey',
    shadowRadius: 5,
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
  count: {
    flex: 0.15,
    backgroundColor: 'cyan',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  choiceButtons: {
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

