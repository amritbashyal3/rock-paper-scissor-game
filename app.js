let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
const options = ["rock", "paper", "scissor"];
const randIdx = Math.floor(Math.random() *3);
return options[randIdx];
}

const drawgame = () => {
  msg.innerText ="Game was draw.Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin, userchoice, compchoice) => {
 if(userwin){
  userscore++;
  userscorepara.innerText = userscore;
 ;
  msg.innerText =`You Win! Your ${userchoice} beats ${compchoice}`;
  msg.style.backgroundColor = "green";
 } else {
  compscore++;
  compscorepara.innerText = compscore;

  msg.innerText = `You Lose ${compchoice} beats your ${userchoice}`;
  msg.style.backgroundColor = "red";
 }
}

const playGame = (userchoice) => {
  
  // Generate computer choice
  const compchoice = genCompChoice();
 

  if(userchoice === compchoice){
    //Draw Game
    drawgame();
  } else {
    let userwin = true;
    if(userchoice === "rock"){
      //scissors,paper
      userwin = compchoice === "paper" ? false : true;
    } else if(userchoice === "scissors"){
      //rock,paper
      userwin = compchoice === "rock" ? false : true;
    } else {
      //rock,scissors
        userwin = compchoice === "scissor" ? false :true;
    }
    showwinner(userwin, userchoice, compchoice);
    }
  };


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  })
})