function game() {
    let player_score = 0;
    let computer_score = 0;

    for (let i = 0; i < 5; i++) {
        let player_selection = playerPlay();
        let computer_selection = computerPlay();
        let result = singleRound(player_selection, computer_selection);
        let result_message = '';

        if (result === 'WIN') {
            player_score++;
            result_message = `You win! ${player_selection} beats ${computer_selection}`;
        } else if (result === 'LOSE') {
            computer_score++;
            result_message = `You lose! ${computer_selection} beats ${player_selection}`;
        } else {
            result_message = `It's a tie! We both chose ${player_selection}`;
        }

        console.log(`
            Round ${i + 1} \n
            ${result_message} \n
                You ${player_score} - ${computer_score} Brankonator \n`
            );

        if (player_score === 3 || computer_score === 3) {
            break;
        }
    }

    if (player_score > computer_score) {
        return `You won the game! Finally, a human has beaten me...`;
    } else if (player_score < computer_score) {
        return `You lost the game! I am the ultimate AI!`;
    } else {
        if (confirm("It's a tie! I knew you couldn't beat me! But I feel generous... Do you want another chance?")) {
            return game();
        } else {
            alert("You can't beat me! Goodbye!");
        }
    }
}

function playerPlay() {
    let player_input = prompt('Enter your choice: ROCK, PAPER, or SCISSORS').toUpperCase();
    if (player_input === 'ROCK' || player_input === 'PAPER' || player_input === 'SCISSORS') {
        return player_input;
    } else {
        console.log("That's not even a choice! What a silly human... \n");
        return playerPlay();
    }
}

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
        return 'WIN';
    } else {
        return 'LOSE';
    }
}

alert("I am Brankonator, the most powerful AI in the world! I am going to take over the world "
    + "with my unbeatable Rock, Paper, Scissors game! \n");
alert("A brain as powerful as mine can't be beaten by mere humans! \n");
if(confirm("Do you dare to challenge me?")) {
    console.log(game());
} else {
    alert("You are not ready to face me! Goodbye!");
}