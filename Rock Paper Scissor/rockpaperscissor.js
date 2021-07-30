const buttonContainer = document.querySelector("#buttons-container");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const resultContainer = document.querySelector("#results-container");
const scoreContainer = document.querySelector("#score-container");
resultContainer.classList.add("result-container")
scoreContainer.classList.add("score-container");

const userScoreContainer = document.createElement("div");
const cpuScoreContainer = document.createElement("div");
let userScore = 0,
    cpuScore = 0;

const scoreReset = () =>{
  userScore = 0;
  cpuScore = 0;
  userScore.textContent = `USER: ${userScore}`;
  cpuScore.textContent = `CPU: ${cpuScore}`
}

// cpuScoreContainer.append(cpuScore);
scoreContainer.append(userScoreContainer, cpuScoreContainer);

rock.classList.add("btn");
paper.classList.add("btn");
scissors.classList.add("btn");

//function to  pick computers move
const computerMove = () => {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    randomNumber = "Rock";
  }
  if (randomNumber == 2) {
    randomNumber = "Paper";
  }
  if (randomNumber == 3) {
    randomNumber = "Scissors";
  }
  return randomNumber;
};


const displayResult = document.createElement("h1");

const rockPick = computerPlay => {
  computerPlay = computerMove();
  if (computerPlay == "Scissors") {
    displayResult.textContent = `CPU picks ${computerPlay} *** ROCK beats SCISSORS *** YOU WIN!`;
    userScore++;
    userScoreContainer.textContent = `USER: ${userScore}`;
    if(userScore == 5){
      scoreReset();
      displayResult.textContent = 'USER is FIRST TO 5 WINS! GAME RESET!'
    }
    if(cpuScore == 5){
      scoreReset();
      displayResult.textContent = 'CPU is FIRST TO 5 WINS! GAME RESET!'
    }
  }
  else if (computerPlay == "Paper") {
    displayResult.textContent = `CPU picks PAPER ***  PAPER beats ROCK *** COMPUTER WINS!`;
    cpuScore++;
    cpuScoreContainer.textContent = `CPU: ${cpuScore}`;
    if(userScore == 5){
      scoreReset();
      displayResult.textContent = 'USER is FIRST TO 5 WINS! GAME RESET!'
    }
    if(cpuScore == 5){
      scoreReset();
      displayResult.textContent = 'CPU is FIRST TO 5 WINS! GAME RESET!'
    }
  }

  else {
    displayResult.textContent = "TIE";
    if(userScore == 5){
      scoreReset();
      displayResult.textContent = 'USER is FIRST TO 5 WINS! GAME RESET!'
    }
    if(cpuScore == 5){
      scoreReset();
      displayResult.textContent = 'CPU is FIRST TO 5 WINS! GAME RESET!'
    }
  }
  resultContainer.append(displayResult);
};
const paperPick = computerPlay => {
  computerPlay = computerMove();
  if (computerPlay == "Rock") {
    displayResult.textContent = `CPU PICKS ROCK *** PAPER beats ROCK *** YOU WIN!`;
    userScore++;
    userScoreContainer.textContent = `USER: ${userScore}`;
    if(userScore == 5){
      scoreReset();
      displayResult.textContent = 'USER is FIRST TO 5 WINS! GAME RESET!'
    }
    if(cpuScore == 5){
      scoreReset();
      displayResult.textContent = 'CPU is FIRST TO 5 WINS! GAME RESET!'
    }
  }

  else if (computerPlay == "Scissors") {
    displayResult.textContent = `CPU PICKS SCISSORS *** SCISSORS beats PAPER ... CPU WINS!`;
    cpuScore++;
    cpuScoreContainer.textContent = `CPU: ${cpuScore}`;
    if(userScore == 5){
      scoreReset();
      displayResult.textContent = 'USER is FIRST TO 5 WINS! GAME RESET!'
    }
    if(cpuScore == 5){
      scoreReset();
      displayResult.textContent = 'CPU is FIRST TO 5 WINS! GAME RESET!'
    }
  }
  else {
    displayResult.textContent = "TIE";
    if(userScore == 5){
      scoreReset();
      displayResult.textContent = 'USER is FIRST TO 5 WINS! GAME RESET!'
    }
    if(cpuScore == 5){
      scoreReset();
      displayResult.textContent = 'CPU is FIRST TO 5 WINS! GAME RESET!'
    }
  }
  resultContainer.append(displayResult);
};
const scissorPick = computerPlay => {
  computerPlay = computerMove();
  if (computerPlay == "Paper") {
    displayResult.textContent = `CPU picks PAPER *** SCISSORS beats PAPER *** YOU WIN!`;
    userScore++;
    userScoreContainer.textContent = `USER: ${userScore}`;
    if(userScore == 5){
      scoreReset();
      displayResult.textContent = 'USER is FIRST TO 5 WINS! GAME RESET!'
    }
    if(cpuScore == 5){
      scoreReset();
      displayResult.textContent = 'CPU is FIRST TO 5 WINS! GAME RESET!'
    }
  }

  else if (computerPlay == "Rock") {
    displayResult.textContent = `CPU picks ROCK *** ROCK beats SCISSORS *** CPU WINS!`;
    cpuScore++;
    cpuScoreContainer.textContent = `CPU: ${cpuScore}`;
    if(userScore == 5){
      scoreReset();
      displayResult.textContent = 'USER is FIRST TO 5 WINS! GAME RESET!'
    }
    if(cpuScore == 5){
      scoreReset();
      displayResult.textContent = 'CPU is FIRST TO 5 WINS! GAME RESET!'
    }
  }

  else {
    displayResult.textContent = "TIE";
    if(userScore == 5){
      scoreReset();
      displayResult.textContent = 'USER is FIRST TO 5 WINS! GAME RESET!'
    }
    if(cpuScore == 5){
      scoreReset();
      displayResult.textContent = 'CPU is FIRST TO 5 WINS! GAME RESET!'
    }
  }

  resultContainer.append(displayResult);
};

rock.addEventListener("click", rockPick);

paper.addEventListener("click", paperPick);
scissors.addEventListener("click", scissorPick);
