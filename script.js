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

        result_message = `\n
            Round ${i + 1}/5 \n
            ${result_message} \n
            You ${player_score} - ${computer_score} Brankonator \n`;

        console.log(result_message);
        alert(result_message);

        if (player_score === 3 || computer_score === 3) {
            break;
        }
    }

    if (player_score > computer_score) {
        alert(`You won the game! Finally, a human has beaten me...`);
        return `You won the game! Finally, a human has beaten me...`;
    } else if (player_score < computer_score) {
        alert(`You lost the game! I am the ultimate AI!`);
        return `You lost the game! I am the ultimate AI!`;
    } else {
        if (confirm("It's a tie! I knew you couldn't beat me! But I feel generous... Do you want another chance?")) {
            return game();
        } else {
            console.log("You can't beat me! Goodbye!");
            alert("You can't beat me! Goodbye!");
        }
    }
}

function playerPlay() {
    let player_input = prompt('Enter your choice: ROCK, PAPER, or SCISSORS').trim();
    player_input = player_input.toUpperCase();

    if (player_input === 'ROCK' || player_input === 'PAPER' || player_input === 'SCISSORS') {
        return player_input;
    } else {
        // left the else for readability
        console.log("That's not even a choice! What a silly human... \n");
        alert("That's not even a choice! What a silly human... \n");
        return playerPlay();
    }
}

function computerPlay() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function singleRound(player_selection, computer_selection) {
    if (player_selection === computer_selection) {
        return; // tie
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
if(confirm("Do you dare to challenge me? The game is best of 5 rounds!")) {
    alert(game());
} else {
    alert("You are not ready to face me! Goodbye!");
}