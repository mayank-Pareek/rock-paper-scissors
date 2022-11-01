let getComChoice = function(){
  let randomNum = Math.floor(Math.random() * 3);
 switch(randomNum){
   case 0: return "rock";
   case 1: return "paper";
   case 2: return "scissor";
 }
};
let getHumanChoice = function(){
let choice = prompt("Please enter your choice");
return choice.toLowerCase();
};

let playRound = function(){
    let com = getComChoice();
    let human = getHumanChoice();
    console.log(`You chose ${human} and computer chose ${com}`);
    if(com===human){
      return "tie";
    }
    else if(com==="rock" && human ==="scissor"||com==="scissor" && human ==="paper"||com==="paper" && human ==="rock"){
  return "com";
    }
     else return "human";
  };
  
 

