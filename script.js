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
  
  let game = function(){
    let human=0,com=0;
    for(let i=0;i<5;i++){
      let result=playRound();
      if(result==="human") {
        console.log('You won this round');
        human++;
      }
      else if(result ==="com"){
        console.log('Computer won this round');
        com++;
      }
      else {
        console.log('This round ties');
  human++;
      com++;}
    }
    if(human>com)console.log("You won");
    else if(com>human)console.log("Computer won");
    else console.log("Match tied");
  }
  
  game();
 

