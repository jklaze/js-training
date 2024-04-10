let player_selection = 'ROCK';
let computer_selection = computerPlay();

function computerPlay() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function singleRound(player_selection, computer_selection) {
    if (player_selection === computer_selection) {
        return 'It\'s a tie!';
    } else if (
        player_selection === 'ROCK' && computer_selection === 'SCISSORS' ||
        player_selection === 'PAPER' && computer_selection === 'ROCK' ||
        player_selection === 'SCISSORS' && computer_selection === 'PAPER')
    {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

console.log(
    `You played ${player_selection} and Brankonator played ${computer_selection}... \n`
    + singleRound(player_selection, computer_selection)
);