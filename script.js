//make the computer chose rock, paper, or scissors//
//take the players choice of paper, rock, or scissors//
//determine the winner or announce tie//
//record the results and repeat until 5 games elapse//
//after 5 games announce total wins/losses/ties//

function computerPlay() {
    let num; 
    num = Math.random();
    num= num*3;
    num=Math.floor(num);
    if (num==0) {
        return "rock";
    }
    else if (num==1) {
        return "scissors";
    }
    else {
        return "paper";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase()
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        return `You entered "${playerSelection}"; please enter "rock", "paper", or "scissors" instead`;
    }
    else if (playerSelection == computerSelection) {
        return `You tied! both players chose ${playerSelection}`;
    }
    else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection=="scissors" && computerSelection=="rock")) {
        return `You lost! ${computerSelection} beats ${playerSelection}`;
    }
    else {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
}

function game() {
    let round=0;
    let userChoice, result, win=0, loss=0, tie=0;
    while (round<5) {
        round++;
        userChoice=prompt("choose 'rock, 'paper', or 'scissors'");
        console.log(result = playRound(userChoice, computerPlay()));
        if (result.substr(4,1) == "w") {
            win++;
        }
        else if (result.substr(4,1) == "l") {
            loss++;
        }
        else if (result.substr(4,1) == "t") {
            tie++;
        }
        else {
            round--;
        }
        console.log(`Your record is ${win} wins, ${loss} losses, and ${tie} ties.`)
    }
    if (win>loss) {
        console.log(`after 5 rounds, you won ${win}. lost ${loss}, and tied ${tie}; You're the winner!`);
    }
    else if (win<loss) {
        console.log(`after 5 rounds, you won ${win}. lost ${loss}, and tied ${tie}; the computer has triumphed!`);
    }
    else {
        console.log(`after 5 rounds, you won ${win}, lost ${loss}, and tied ${tie}; you are an even match!`);
    }
}