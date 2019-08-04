const randomComputerChoice = () => COMPUTER_CHOICES[Math.floor(Math.random() * COMPUTER_CHOICES.length)]
const getRoundOutcome = (userChoice, computerChoice) => {
  let result;
  if (userChoice === 'rock') {
    result = computerChoice === 'scissors' ? 'Victory' : 'Defeat'
  }
  if (userChoice === 'paper') {
    result = computerChoice === 'rock' ? 'Victory' : 'Defeat'
  }
  if (userChoice === 'scissors') {
    result = computerChoice === 'paper' ? 'Victory' : 'Defeat'
  }
  if (userChoice === computerChoice) {
    result = 'Tie game'
  }
  return result;
}

export {randomComputerChoice, getRoundOutcome}