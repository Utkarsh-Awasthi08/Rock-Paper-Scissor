let userSc=0;
let compSc=0;
const userScore=document.querySelector("#user");
const compScore=document.querySelector("#comp");
const choices=document.querySelectorAll(".choice");
const message=document.querySelector("#msg");
const getCompChoice=()=>{
    const options=["stone","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const draw=()=>{
    message.innerText="Game Drawn. Play Again ?";
    message.style.backgroundColor="#081b31"
};
const showWinner=(userWin)=>{
    if(userWin){
        message.innerText="You won !";
        message.style.backgroundColor="green";
        userScore.innerText=`${++userSc}`;
    }
    else
    {
        message.innerText="Computer won !";
        message.style.backgroundColor="red";
        compScore.innerText=`${++compSc}`;
    }
}
const playGame=(userchoice)=>{
    const compChoice=getCompChoice();
    if(userchoice===compChoice)
    draw();
    else
    {
        let userWin=true;
        if(userchoice==="stone")
        userWin=compChoice==="paper"?false:true;
        else if(userchoice==="paper")
        userWin=compChoice==="scissor"?false:true;
        else if(userchoice==="scissor")
        userWin=compChoice==="stone"?false:true;
        showWinner(userWin);
    }  
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        playGame(userchoice);
    })
});