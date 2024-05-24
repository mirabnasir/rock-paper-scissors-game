let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msgBox=document.querySelector(".msgBox");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");
//function to generate computer choice
const genCompChoice= () =>{   
 const options=["rock","paper","scissors"];
/* using Math class with prebuild function to generate
 random numbers and math.floor to remove decimal values*/
const ranIndx=Math.floor(Math.random()*3); 
 return options[ranIndx];
}

const drawGame=()=>{
    console.log("game was draw.")
    msgBox.innerText="Game was draw . Play Again.";
    msgBox.style.background="black";
}

const showWinner=(userWin , userChoice,compChoice)=>{
    if(userWin)
    {  userScore++;
        userScorePara.innerText=userScore;
        console.log("you Win!");
       msgBox.innerText="You Win! " + userChoice +" beats " + compChoice;
       msgBox.style.background="brown";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose!");
        msgBox.innerText="you lose! " + (compChoice) +" beats " +(userChoice);
        msgBox.style.background="red";
    }
}
const playGame= (userChoice)=>{
    console.log(" user choice= ", userChoice);
    const compChoice=genCompChoice();
    console.log(" comp choice= ", compChoice);

    if (userChoice===compChoice)
        //Draw Game
    drawGame();
    else{
        let userWin=true;
       if (userChoice==="rock")
        {
          //paper,scissor
          userWin=compChoice==="paper"?false :true;
        }
        else if(userChoice=="paper")
            {
                //rock,scissors
                userWin=compChoice==="scissors"? false:true;
            }
        else{
            userWin=compChoice=="rock"?false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})