let userScore = 0;
let computerScore = 0;
const userScorepara=document.querySelector("#user");
const compScorepara=document.querySelector("#comp-score");


const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const drawGame=()=>{
   
    msg.innerText="game was draw play Again !!!!!!";
    msg.style.backgroundColor="#081b31";

}
const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
       
        msg.innerText=`You win ! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerScore++;
        compScorepara.innerText=computerScore;
      
        msg.innerText=`You lost :( ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
        
    }

}


const genComputerChoice=() => {
    let options=["rock","paper","scissors"];
    const randINdx=Math.floor(Math.random()*3);

    return options[randINdx];
    //rock ,paper, scissors
}

const playGame=(userchoice)=>{
    console.log("user choice = ",userchoice);

    const compChoice=genComputerChoice();
    console.log("computer choice=",compChoice);

    //generate computer choice -> modular

    if(userchoice===compChoice){
        drawGame();
        
    }
    else{
        let userWin=true;
        if(userchoice==="rock"){
            //scissors,paper
            userWin=compChoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors"?false:true;
        }
        else {
            userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin,userchoice,compChoice);
    }



}


choices.forEach((choice) => {
    console.log(choice);

    choice.addEventListener("click", () => {

        const userchoice=choice.getAttribute("id");
       
        playGame(userchoice);
    });
});
