let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let humanEmoji = document.querySelector(".humanChoice");
let comEmoji = document.querySelector(".comChoice");

result = document.querySelector(".result");
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

// let getHumanChoice = function () {
//   let choice = prompt("Please enter your choice");
//   return choice.toLowerCase();
// };
let applyEmoji = function (playerEmoji, choice) {
  if (choice === "rock") {
    playerEmoji.innerHTML = "✊";
  } else if (choice === "paper") {
    playerEmoji.innerHTML = "✋";
    console.log(playerEmoji);
  } else {
    playerEmoji.innerHTML = "✌️";
  }
  console.log(playerEmoji);
  console.log(choice);
};

let playRound = function (humanChoice) {
  let com = getComChoice();
  let human = humanChoice;
  applyEmoji(comEmoji,com);
  applyEmoji(humanEmoji,humanChoice);
  console.log(humanEmoji);
  console.log(`You chose ${human} and computer chose ${com}`);
  if (com === human) {
    return "tie";
  } else if (
    (com === "rock" && human === "scissor") ||
    (com === "scissor" && human === "paper") ||
    (com === "paper" && human === "rock")
  ) {
    return "com";
  } else return "human";
};

let game = function (humanChoice) {
  let human = 0,
    com = 0;
  for (let i = 0; i < 1; i++) {
    let result = playRound(humanChoice);
    if (result === "human") {
      console.log("You won this round");
      human++;
    } else if (result === "com") {
      console.log("Computer won this round");
      com++;
    } else {
      console.log("This round ties");
      human++;
      com++;
    }
  }
  if (human > com) {
    result.innerHtml = "You won";
  } else if (com > human) {
    result.innerHtml = "Computer won";
  } else {
    result.innerHtml = "Match tied";
  }
};

rock.addEventListener("click", function () {
  game("rock");
});

paper.addEventListener("click", function () {
  game("paper");
});
scissor.addEventListener("click", function () {
  game("scissor");
});
