let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let humanScore = document.querySelector(".humanScore");
let comScore = document.querySelector(".comScore");
let humanEmoji = document.querySelector(".humanChoice");
let comEmoji = document.querySelector(".comChoice");
let buttons = document.querySelector(".buttons");
let result = document.querySelector(".result");
let options = document.querySelector(".options");
let heading = document.querySelector("#heading");
let getComChoice = function () {
  let randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
};

let applyEmoji = function (playerEmoji, choice) {
  if (choice === "rock") {
    playerEmoji.innerHTML = "✊";
  } else if (choice === "paper") {
    playerEmoji.innerHTML = "✋";
  } else {
    playerEmoji.innerHTML = "✌️";
  }
};

let playRound = function (humanChoice) {
  let com = getComChoice();
  let human = humanChoice;
  applyEmoji(comEmoji, com);
  applyEmoji(humanEmoji, humanChoice);
  result.innerHTML = `You chose ${human} and computer chose ${com}`;
  if (com === human) {
    heading.innerHTML = "This round ties";
    comPoints++;
    humanPoints++;
  } else if (
    (com === "rock" && human === "scissor") ||
    (com === "scissor" && human === "paper") ||
    (com === "paper" && human === "rock")
  ) {
    heading.innerHTML = "Computer won this round";
    comPoints++;
  } else {
    heading.innerHTML = "You won this round";
    humanPoints++;
  }
  humanScore.innerHTML = humanPoints;
  comScore.innerHTML = comPoints;
  if (humanPoints === 5 || comPoints === 5) {
    gameResult();
  }
};

let gameResult = function () {
  buttons.innerHTML = " ";
  options.innerHTML = " ";
  result.innerHTML = " ";
  if (humanPoints > comPoints) {
    heading.innerHTML = "Game Over! You won";
  } else if (comPoints > humanPoints) {
    heading.innerHTML = "Game Over! Computer won";
  } else {
    heading.innerHTML = "Game Over! Match tied";
  }
};

let humanPoints = 0,
  comPoints = 0;
rock.addEventListener("click", function () {
  playRound("rock");
});

paper.addEventListener("click", function () {
  playRound("paper");
});
scissor.addEventListener("click", function () {
  playRound("scissor");
});
