import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChoicesButton from './components/ChoicesButton';
import CHOICES from './Choices'
import ChoiceCard from './components/ChoiceCard';
import Result from './components/Result';
import ResultCount from './components/ResultCount';
import { randomComputerChoice, getRoundOutcome } from './processFunc'
import ResetButton from './components/ResetButton'
import AnalysisButton from './components/AnalysisButton'

const counterStorage = {
  victory: 0,
  draw: 0,
  defeat: 0,
  playedGames: 0
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice: {},
      computerChoice: {},
      result: 'Select your choice',
      ...counterStorage
    };
  };
  onReset = () => {
    this.setState({
      userChoice: {},
      computerChoice: {},
      result: 'Select your choice',
      ...counterStorage
    })
  }

  counter = result => {
    let { playedGames, victory, draw, defeat } = this.state
    playedGames++;
    result === 'Victory' && victory++
    result === 'Defeat' && defeat++
    result === 'Tie game' && draw++
    return { playedGames, victory, draw, defeat }
  }

  onAnalysis = () => {
    alert('Victory:'+ {victory})
  }
  onChoicesPress = (choices) => {
    /*if onpress item.name === choice => userChoice will return choices.*/
    const userChoice = CHOICES.find(item => item.name === choices)
    const computerChoice = randomComputerChoice()
    const result = getRoundOutcome(userChoice.name, computerChoice.name)
    const { playedGames, victory, draw, defeat } = this.counter(result)
    /* this.setState({userChoice: userChoice, computerChoice: computerChoice}) ES6 syntax*/
    this.setState({
      userChoice,
      computerChoice,
      result,
      playedGames,
      victory,
      draw,
      defeat
    })
  }

  render() {
    let rateVictoryGames = ((this.state.victory * 100) / (this.state.playedGames)).toFixed(2);
    let rateDrawGames = ((this.state.draw * 100) / (this.state.playedGames)).toFixed(2);
    let rateDefeatGames = ((this.state.defeat * 100) / (this.state.playedGames)).toFixed(2);
    rateVictoryGames = isNaN(rateVictoryGames) ? 0 : rateVictoryGames;
    rateDrawGames = isNaN(rateDrawGames) ? 0 : rateDrawGames;
    rateDefeatGames = isNaN(rateDefeatGames) ? 0 : rateDefeatGames;

    return (
      <View style={styles.container}>

        <View style={styles.result}>
          <AnalysisButton onResetButton={this.onAnalysis} />
          <Result result={this.state.result} />
          <ResetButton onResetButton={this.onReset} />
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
          <View style={styles.countStyles}>
            <Text>Played Games:</Text>
            <Text>{this.state.playedGames}</Text>
            <Text>   </Text>
          </View>
          <ResultCount
            result='Victory'
            countResult={this.state.victory}
            rate={rateVictoryGames}
          />
          <ResultCount
            result='Tie Game'
            countResult={this.state.draw}
            rate={rateDrawGames}
          />
          <ResultCount
            result='Defeat'
            countResult={this.state.defeat}
            rate={rateDefeatGames}
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
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 5,
    marginHorizontal: 5
  },
  displayMonitor: {
    flex: 0.45,
  },
  choicesContainer: {
    margin: 5,
    borderWidth: 2,
    height: 270,
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
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  countStyles: {
    justifyContent:'center',
    alignItems: 'center',
  },
  choiceButtons: {
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

